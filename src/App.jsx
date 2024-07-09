import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Registration } from './Login'; // Adjust the import paths as necessary
import Chatbot from './Chatbot'; // Adjust the import path as necessary

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("UID"); // Adjust according to your login logic
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const ReverseProtection = ({ children }) => {
  const isLoggedIn = localStorage.getItem("UID"); // Check if user is logged in
  return isLoggedIn ? <Navigate to="/chatbot" /> : children; // Redirect logged-in users to chatbot, otherwise render children
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<ReverseProtection><Login /></ReverseProtection>} />
        <Route path="/register" element={<ReverseProtection><Registration /></ReverseProtection>} />
        <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;