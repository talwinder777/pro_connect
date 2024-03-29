import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CatchPage.css'; // Import CSS file for styling

const CatchPage = () => {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleJoinButtonClick = async (type) => {
        setUserType(type);
        try {
            const formData = new FormData();
            formData.append('email', email);
            let endpoint;
            if (type === 'Expert') {
                endpoint = 'http://34.205.71.76/save_user_data/save_expert_email/';
            } else if (type === 'Client') {
                endpoint = 'http://34.205.71.76/save_user_data/save_client_email/';
            }

            await axios.post(endpoint, formData);

            // Handle success
            console.log('Data submitted successfully');
        } catch (error) {
            // Handle error
            console.error('Error submitting data:', error);
        }
    };
    return (
        <div className="catch-page">
            <h1>Coming soon!</h1>
            <h2>Discover a platform where experts and advice-seekers unite for valuable exchanges and genuine connections.</h2>
            <h4>Say goodbye to unanswered messages and hello to opportunity. Join our community today to monetize your expertise, gain valuable insights, and propel your journey forward. Sign up now to be part of the future connections.</h4>
            <div className="email-field">
                <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                <div className="join-button">
                    <button className="join-button1" onClick={() => handleJoinButtonClick('Client')}>Join as Advice Seeker</button>
                    <button className="join-button2" onClick={() => handleJoinButtonClick('Expert')}>Join as Expert</button>
                </div>

            </div>

        </div>
    );
};

export default CatchPage;
