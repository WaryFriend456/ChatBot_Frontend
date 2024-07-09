import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Registration } from './Login'; // Adjust the import paths as necessary
import Chatbot from './Chatbot'; // Adjust the import path as necessary

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("UID"); // Adjust according to your login logic
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/chatbot" element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />
        {/* Redirect to login if no other routes matched and user is not logged in */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;