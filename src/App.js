import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSignupPage from './LandingSignupPage';
import ExpertSignupPage from './ExpertSignupPage';
import CustomerSignUp from './CustomerSignUp';
import SignInForm from "./SignIn";
import HomePage from './WebsiteHomePage/HomePage';

// FOR TESTING YOU COMPONENT YOU CAN CHANGE LINE NUMBER 15 TO YOUR COMPONENT
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingSignupPage />} />
        <Route path="/expert-signup" element={<ExpertSignupPage />} />
        <Route path="/customer-signup" element={<CustomerSignUp />} />
        <Route path="/expert-signin" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}

export default App;
