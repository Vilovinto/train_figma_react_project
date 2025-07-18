import React, { createContext, useContext, useState, useRef, useCallback, useEffect, PropsWithChildren } from 'react';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatThread {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: number;
}

interface ChatContextType {
  chats: ChatThread[];
  activeChatId: string;
  streamed: string;
  isStreaming: boolean;
  sendMessage: (content: string) => void;
  createChat: () => string;
  switchChat: (id: string) => void;
  clearChat: () => void;
  deleteChat: (id: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
};

const getDefaultChat = (): ChatThread => ({
  id: Date.now().toString(),
  title: 'New chat',
  messages: [],
  createdAt: Date.now(),
});

export const ChatProvider = ({ children }: PropsWithChildren) => {
  const [chats, setChats] = useState<ChatThread[]>(() => {
    const saved = localStorage.getItem('chats');
    return saved ? JSON.parse(saved) : [getDefaultChat()];
  });
  const [activeChatId, setActiveChatId] = useState(() => {
    const saved = localStorage.getItem('activeChatId');
    return saved || (chats[0] && chats[0].id);
  });
  const [streamed, setStreamed] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const streamRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);
  useEffect(() => {
    localStorage.setItem('activeChatId', activeChatId);
  }, [activeChatId]);

  const sendMessage = useCallback((content: string) => {
    setChats(prev => prev.map(chat =>
      chat.id === activeChatId
        ? { ...chat, messages: [...chat.messages, { role: 'user', content }] }
        : chat
    ));
    setStreamed('');
    setIsStreaming(true);
    const answer = `Echo: ${content}`;
    let i = 0;
    streamRef.current && clearInterval(streamRef.current);
    streamRef.current = setInterval(() => {
      setStreamed(prev => prev + answer[i]);
      i++;
      if (i >= answer.length) {
        clearInterval(streamRef.current!);
        setChats(prev => prev.map(chat =>
          chat.id === activeChatId
            ? { ...chat, messages: [...chat.messages, { role: 'assistant', content: answer }] }
            : chat
        ));
        setIsStreaming(false);
      }
    }, 30);
  }, [activeChatId]);

  const createChat = useCallback(() => {
    const newChat = getDefaultChat();
    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setStreamed('');
    setIsStreaming(false);
    streamRef.current && clearInterval(streamRef.current);
    return newChat.id;
  }, []);

  const switchChat = useCallback((id: string) => {
    setActiveChatId(id);
    setStreamed('');
    setIsStreaming(false);
    streamRef.current && clearInterval(streamRef.current);
  }, []);

  const clearChat = useCallback(() => {
    setChats(prev => prev.map(chat =>
      chat.id === activeChatId ? { ...chat, messages: [] } : chat
    ));
    setStreamed('');
    setIsStreaming(false);
    streamRef.current && clearInterval(streamRef.current);
  }, [activeChatId]);

  const deleteChat = useCallback((id: string) => {
    setChats(prev => prev.filter(chat => chat.id !== id));
    setTimeout(() => {
      setActiveChatId(prev => {
        const remaining = chats.filter(chat => chat.id !== id);
        return remaining[0]?.id || '';
      });
    }, 0);
  }, [chats]);

  return (
    <ChatContext.Provider value={{ chats, activeChatId, streamed, isStreaming, sendMessage, createChat, switchChat, clearChat, deleteChat }}>
      {children}
    </ChatContext.Provider>
  );
}; 