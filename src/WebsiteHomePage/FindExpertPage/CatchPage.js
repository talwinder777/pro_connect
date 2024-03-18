import React from 'react';
import { useState } from 'react';
import './CatchPage.css'; // Import CSS file for styling

const CatchPage = () => {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleJoinButtonClick = (type) => {
        setUserType(type);
        // Here you can add code to send the email and user type to your backend or Google Sheets
        console.log('Email:', email);
        console.log('User Type:', type);
    };
    return (
        <div className="catch-page">
            <h1>Coming soon!</h1>
            <h2>Discover a platform where experts and advice-seekers unite for valuable exchanges and genuine connections.</h2>
            <h4>Say goodbye to unanswered messages and hello to opportunity. Join our community today to monetize your expertise, gain valuable insights, and propel your journey forward. Sign up now to be part of the future connections.</h4>
            <div className="email-field">
                <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                <div className="join-button">
                    <button className="join-button1" onClick={() => handleJoinButtonClick('Advice Seeker')}>Join as Advice Seeker</button>
                    <button className="join-button2" onClick={() => handleJoinButtonClick('Expert')}>Join as Expert</button>
                </div>

            </div>

        </div>
    );
};

export default CatchPage;
