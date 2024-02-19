import React from 'react';
import './HomePageWhatWeDoSection.css'; // Import CSS file for styling
import { FaLaptopCode } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { GiSandsOfTime, GiFlexibleStar } from "react-icons/gi";


const WhatWeDoSection = () => {
    return (
        <section id="what-we-do-section" className="what-we-do-section">
            <h2 className='what-we-do'>What do we do</h2>
            <div className="container">
                <div className="column">
                    <div className="mini-container">
                        <FaLaptopCode className="what-we-do-section-icons" />
                        <h3>Connect with word class experts</h3>
                        <p>Don't know who to get advice from, Get curated session with experts of your choice</p>
                    </div>
                    <div className="mini-container">
                        <MdAutoGraph className="what-we-do-section-icons" />
                        <h3>We are with you forever</h3>
                        <p>We strongly care about our customers, We want to grow with growth of our customers</p>
                    </div>
                </div>
                <div className="column">
                    <div className="mini-container">
                        <GiSandsOfTime className="what-we-do-section-icons" />
                        <h3>Time is Money</h3>
                        <p>Experts sessions are extremely useful and would help save customers working long hours for next successful step</p>
                    </div>
                    <div className="mini-container">
                        <GiFlexibleStar className="what-we-do-section-icons" />
                        <h3>Swtich Experts anytime</h3>
                        <p>If you don't like expert anymore and want to try another, we help you do that.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;