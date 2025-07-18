import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterStep2Page from '../pages/RegisterStep2Page';
import HomePage from '../pages/HomePage';
import HomePageDark from '../pages/HomePageDark';
import ChatHistoryPage from '../pages/ChatHistoryPage';
import ChatPage from '../pages/ChatPage';
import ChatHistoryPageDark from '../pages/ChatHistoryPageDark';
import ChatPageDark from '../pages/ChatPageDark';
import { useAuth } from '../context/AuthContext';

interface RouteProps {
  children: ReactNode;
}

interface ThemedRedirectProps {
  toLight: string;
  toDark: string;
}

const ProtectedRoute = ({ children }: RouteProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const PublicRoute = ({ children }: RouteProps) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/home" replace />;
  return <>{children}</>;
};

const ThemedRedirect = ({ toLight, toDark }: ThemedRedirectProps) => {
  const { pathname } = useLocation();
  const isDark = pathname.includes('dark');
  return <Navigate to={isDark ? toDark : toLight} replace />;
};

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="/register/step2" element={<PublicRoute><RegisterStep2Page /></PublicRoute>} />
      <Route path="/home" element={<ProtectedRoute><HomePage theme="light" /></ProtectedRoute>} />
      <Route path="/home-dark" element={<ProtectedRoute><HomePageDark /></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
      <Route path="/chat-dark" element={<ProtectedRoute><ChatPageDark /></ProtectedRoute>} />
      <Route path="/chats" element={<ProtectedRoute><ChatHistoryPage /></ProtectedRoute>} />
      <Route path="/chats-dark" element={<ProtectedRoute><ChatHistoryPageDark /></ProtectedRoute>} />
      <Route path="/chat-history" element={<ThemedRedirect toLight="/chats" toDark="/chats-dark" />} />
      <Route path="/chat-current" element={<ThemedRedirect toLight="/chat" toDark="/chat-dark" />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);

export default AppRouter; 