import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './transitions.css';

const Navbar = React.lazy(() => import ('./Navbar'));
const HomePage = React.lazy(() => import('./HomePage/HomePage'));
const PosterPage = React.lazy(() => import('./PosterExploration/PosterPage'));
const DrawingPage = React.lazy(() => import('./Drawings/DrawingPage'));
const BrandingPage = React.lazy(() => import('./Branding/BrandingPage'));
const Contact = React.lazy(() => import('./Contact/Contact'));

import './Navbar.css';

export default function App(){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/homePage' element={<HomePage />}/>
          <Route path='/posterPage' element={<PosterPage />}/>
          <Route path='/drawingPage' element={<DrawingPage />}/>
          <Route path='/brandingPage' element={<BrandingPage />}/>
          <Route path='/contact' element={<Contact />}/>
          
          {/* Default Route to redirect to HomePage */}
          <Route path="*" element={<Navigate to="/homePage" replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
}