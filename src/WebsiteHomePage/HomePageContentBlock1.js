import React from 'react';
import './HomePageContentBlock1.css'; // Import CSS file for styling

const ContentBlock1 = () => {
    return (
        <section id="content-block-1" className="content-block">
            <img src="https://gun.io/wp-content/uploads/2023/07/homepage-hero.jpg" className="background-image" alt="" />
            <div className="content-container">
                {/* Content goes here */}
                <h1>
                    Elevate your career-growth:<br />
                </h1>
                <p>Connect with expert for personalized<br />mentorship</p>
                {/* Other content */}
                <button>Get Started now</button>
                <div className="icon-container">
                    <div className="icon-wrapper">
                        <img src="https://gun.io/wp-content/uploads/2023/07/amazon.png" alt="Amazon" />
                    </div>
                    <div className="icon-wrapper">
                        <img src="https://gun.io/wp-content/uploads/2023/07/tmf.png" alt="TMF" />
                    </div>
                    <div className="icon-wrapper">
                        <img src="https://gun.io/wp-content/uploads/2023/07/dribbleup.png" alt="DribbleUp" />
                    </div>
                    <div className="icon-wrapper">
                        <img src="https://gun.io/wp-content/uploads/2023/07/tesla.png" alt="Tesla" />
                    </div>
                    <div className="icon-wrapper">
                        <img src="https://gun.io/wp-content/uploads/2023/07/cisco.png" alt="Cisco" />
                    </div>
                </div>
            </div>
        </section>


    );
};

export default ContentBlock1;