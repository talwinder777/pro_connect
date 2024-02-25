import React from 'react';
import './HomePageHowDoesItWork.css'; // Import CSS file for styling

const HowDoesItWork = () => {
    return (
        <section id="how-does-it-work" className="how-does-it-work">
            <div className='how-does-it-work-container'>
                <div className="how-does-it-work-container1">
                    {/* Division 1 */}
                    <div className="division-1">How Does It Work</div>
                    <h2>Finding Dream Experts Made Easy</h2>
                    {/* End of Division 1 */}
                </div>
                <div className="step-grid">
                    <div className="steps__step">
                        <div className="steps__step-number">1</div>
                        <div className="steps__step-content">
                            <h3>Find your ideal expert</h3>
                            <p className='steps__step-content_p'>Explore Ideal expert on our platform related to your profession</p>
                        </div>
                    </div>
                    <div className="steps__step">
                        <div className="steps__step-number">2</div>
                        <div className="steps__step-content">
                            <h3>Sign Up with Expert.io</h3>
                            <p className='steps__step-content_p'>Sign up for the platform and get started for scheduling a session</p>
                        </div>
                    </div>
                    <div className="steps__step">
                        <div className="steps__step-number">3</div>
                        <div className="steps__step-content">
                            <h3>Schedule 1:1 Session</h3>
                            <p className='steps__step-content_p'>Schedule session with expert to talk for guidance</p>
                        </div>
                    </div>
                    <div className="steps__step">
                        <div className="steps__step-number">4</div>
                        <div className="steps__step-content">
                            <h3>Feedback</h3>
                            <p className='steps__step-content_p'>Provide the feedback for the expert on the platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowDoesItWork;
