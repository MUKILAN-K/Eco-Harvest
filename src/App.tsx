import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { LearnMore } from './pages/LearnMore';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { MyLand } from './pages/MyLand';
import { Store } from './pages/Store';
import { Market } from './pages/Market';
import { Services } from './pages/Services';
import { GovSchemes } from './pages/GovSchemes';
import { Announcements } from './pages/Announcements';
import { DiseaseDetection } from './pages/DiseaseDetection';
import { Contact } from './pages/Contact';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/my-land" element={
        <ProtectedRoute>
          <MyLand />
        </ProtectedRoute>
      } />
      <Route path="/store" element={
        <ProtectedRoute>
          <Store />
        </ProtectedRoute>
      } />
      <Route path="/market" element={
        <ProtectedRoute>
          <Market />
        </ProtectedRoute>
      } />
      <Route path="/services" element={
        <ProtectedRoute>
          <Services />
        </ProtectedRoute>
      } />
      <Route path="/gov-schemes" element={
        <ProtectedRoute>
          <GovSchemes />
        </ProtectedRoute>
      } />
      <Route path="/announcements" element={
        <ProtectedRoute>
          <Announcements />
        </ProtectedRoute>
      } />
      <Route path="/disease-detection" element={
        <ProtectedRoute>
          <DiseaseDetection />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;