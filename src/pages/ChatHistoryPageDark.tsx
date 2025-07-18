import React from 'react';
import { useChat } from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout';

const ChatHistoryPageDark = () => {
  const { chats, activeChatId, switchChat, deleteChat } = useChat();
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row relative overflow-x-hidden bg-[#101010]">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-start relative bg-[#101010]">
        <div className="w-full max-w-2xl bg-[#232325] rounded-[24px] shadow p-8 flex flex-col gap-6 mt-12">
          {chats.length === 0 && <div className="text-center text-[#888]">No chats yet</div>}
          {chats.map(({ id, title, messages, createdAt }) => (
            <div
              key={id}
              className={`flex flex-row items-center justify-between px-4 py-3 rounded-[12px] cursor-pointer transition ${id === activeChatId ? 'bg-[#333]' : ''}`}
              onClick={e => {
                if ((e.target as HTMLElement).closest('.delete-chat-btn')) return;
                switchChat(id);
                navigate('/chat-dark');
              }}
            >
              <div className="flex flex-col text-[#CBCBCB]">
                <span className="font-medium">{title}</span>
                <span className="text-xs opacity-70">{messages.length} messages</span>
                <span className="text-xs opacity-50">{new Date(createdAt).toLocaleString()}</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                {id === activeChatId && <span className="text-xs text-[#FFCC06]">Active</span>}
                <button className="delete-chat-btn w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#232325]/80 transition ml-2" style={{ outline: 'none', border: 'none', background: 'none', padding: 0 }} aria-label="Delete Chat" onClick={() => deleteChat(id)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#FFCC06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="5" x2="15" y2="15" />
                    <line x1="15" y1="5" x2="5" y2="15" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryPageDark; 