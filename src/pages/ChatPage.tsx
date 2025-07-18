import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar, TopRightButtons } from '../components/layout';
import InputBlock from '../components/home/InputBlock';

const ChatPage = () => {
  const { chats, activeChatId, streamed, isStreaming, clearChat, sendMessage } = useChat();
  const navigate = useNavigate();
  const location = useLocation();
  const chat = chats.find(({ id }) => id === activeChatId);
  const [inputValue, setInputValue] = useState('');
  const [hasSentInitialMessage, setHasSentInitialMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.state && location.state.initialMessage && !hasSentInitialMessage) {
      sendMessage(location.state.initialMessage);
      setHasSentInitialMessage(true);
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, hasSentInitialMessage, sendMessage, navigate, location.pathname]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages.length, isStreaming, streamed]);

  return (
    <div className="w-full h-screen bg-[#FBF8F4]">
      <div className="fixed left-0 top-0 h-screen z-30" style={{minWidth: 220, maxWidth: 320, width: 320}}>
        <Sidebar />
      </div>
      <TopRightButtons style={{ right: 70, zIndex: 40, position: 'fixed', top: 32 }} />
      <div className="absolute top-0 left-[340px] right-0" style={{bottom: 240, overflowY: 'auto', display: 'flex', justifyContent: 'flex-start', paddingTop: 100, paddingBottom: 0, zIndex: 1, paddingRight: 220, overflowAnchor: 'none'}}>
        <div style={{ maxWidth: 700, width: '100%', marginLeft: 0, display: 'flex', flexDirection: 'column', gap: 24, paddingLeft: 24 }}>
          {(!chat || chat.messages.length === 0) && !isStreaming && <div className="text-center text-[#999]">No messages yet</div>}
          {chat && chat.messages.map(({ role, content }, i) => (
            <div key={i} className={role === 'user' ? 'text-right' : 'text-left'}>
              <span className={role === 'user'
                ? 'rounded-[12px] px-4 py-2 inline-block bg-[#FFE66E] text-black'
                : 'rounded-[12px] px-4 py-2 inline-block bg-[#F0F0F0] text-[#333]'
              }>
                {content}
              </span>
            </div>
          ))}
          {isStreaming && (
            <div className="text-left">
              <span className="rounded-[12px] px-4 py-2 inline-block bg-[#F0F0F0] text-[#333]">
                {streamed}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="fixed left-[320px] right-0 bottom-0 pb-8 z-50 flex flex-col gap-8 items-center justify-end" style={{maxWidth: '70vw', margin: '0 auto'}}>
        <InputBlock
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
          placeholder="Ask anything"
          onSend={() => {
            if (inputValue.trim()) {
              sendMessage(inputValue);
              setInputValue('');
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatPage; 