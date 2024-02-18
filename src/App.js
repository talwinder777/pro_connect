import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSignupPage from './LandingSignupPage';
import ExpertSignupPage from './ExpertSignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingSignupPage />} />
        <Route path="/expert-signup" element={<ExpertSignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
