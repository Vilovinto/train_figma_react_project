import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import AppRouter from './routes/AppRouter';

const App = () => (
  <AuthProvider>
    <ChatProvider>
      <AppRouter />
    </ChatProvider>
  </AuthProvider>
);

export default App;
