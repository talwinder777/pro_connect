import React from 'react';
import { useState, useCallback } from 'react';
import axios from 'axios';
import './CatchPage.css'; // Import CSS file for styling
import { responsiveFontSizes } from '@mui/material';
import validators from './../../validators';

const CatchPage = () => {
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showErrorModal, setErrorModal] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        // Check email validity
        if (!validators.isValidEmail(value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleJoinButtonClick = async (type) => {
        setUserType(type);
        // Check if email is valid
        if (!validators.isValidEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        try {
            const formData = new FormData();
            formData.append('email', email);
            let endpoint;
            if (type === 'Expert') {
                endpoint = 'https://backend.seekexpert.ai/save_user_data/save_expert_email/';
            } else if (type === 'Client') {
                endpoint = 'https://backend.seekexpert.ai/save_user_data/save_client_email/';
            }

            const response = await axios.post(endpoint, formData);

            if (response.status === 200) {
                console.log('logging out the success');
                toggleModal();
            } else {
                console.log('logging out the error');
                toggleErrorModal();
            }

        } catch (error) {
            // Handle error
            toggleModal();
            console.error('Error submitting data:', error);
        }
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleErrorModal = () => {
        setErrorModal(!showErrorModal);
    }

    const Modal = () => {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>Thank you for joining!</h2>
                    <p>You have successfully joined as a {userType}.</p>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        );
    };

    const ErrorModal = ({ onClose }) => {
        return (
            <div className="error-modal-container">
                <div className="error-modal">
                    <div className="error-modal-content">
                        <h2>Error</h2>
                        <p>There was an error while submitting your response. Please try again.</p>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    };

    const Waitlist = () => {
        return (
            <div className="catch-page">
                <h1>Coming soon!</h1>
                <h2>Discover a platform where experts and advice-seekers unite for valuable exchanges and genuine connections.</h2>
                <h4>Say goodbye to unanswered messages and hello to opportunity. Join our community today to monetize your expertise, gain valuable insights, and propel your journey forward. Sign up now to be part of the future connections.</h4>
                <div className="email-field">
                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} autoFocus />
                    {emailError && <span className="error-message">{emailError}</span>}
                    <div className="join-button">
                        <button className="join-button1" onClick={() => handleJoinButtonClick('Client')}>Join as Advice Seeker</button>
                        <button className="join-button2" onClick={() => handleJoinButtonClick('Expert')}>Join as Expert</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {!showModal && <Waitlist />}
            {showModal && <Modal onClose={toggleModal} />}
            {showErrorModal && <ErrorModal onClose={toggleErrorModal} />}
        </div>
    );
};
export default CatchPage;


