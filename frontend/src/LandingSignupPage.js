// LandingSignupPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingSignupPage.css';
// import logo from './expert-io-logo.png'; // Import company logo image

function LandingSignupPage() {
    const history = useNavigate();
    return (
        <div className="landing-signup">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <span className="company-name">Expert.io</span>
                </div>
                <button className="sign-in-button" onClick={() => history('/expert-signin')}>Already have an account? <span className="sign-in-text">Sign in</span></button>
            </header>

            {/* Main content */}
            <div className="main-content">
                <h2>Are you an expert or seeking help from an expert?</h2>
                <div className="buttons-container">
                    <button className="expert-button" onClick={() => history('/expert-signup')}>I am the expert.</button>
                    <button className="seeking-button" onClick={() => history('/customer-signup')} >Seeking expert.</button>
                </div>
            </div>
        </div>
    );
}

export default LandingSignupPage;