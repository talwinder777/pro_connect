// LandingSignupPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingSignupPage.css'; // Import CSS file for styling
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
                <div className="header-right">
                    Already have an account?&nbsp;<a href="/signin" style={{ color: '#669966' }}> Sign in</a>
                </div>
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