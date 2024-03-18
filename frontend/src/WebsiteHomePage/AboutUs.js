import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WaveCard from './WaveCard';
import HoverCard from './HoverCard';
import './AboutUs.css';
import Header from "./Header";
import Footer from "./Footer";

function AboutUs() {
    const history = useNavigate();

    return (
        <div>
            <Header />
            <WaveCard class="top-content" title="Welcome to Expert.io, where expertise meets curiosity!"
                       text="At expert.io, our mission is to revolutionize the way people access and interact with experts across various fields. We believe that everyone deserves access to reliable insights and advice, regardless of their location or background. With our platform, we aim to bridge the gap between experts and customers, empowering individuals to make informed decisions and pursue their passions with confidence."
            />

            <div className="cards-container">
                <div className="card1">
                    <HoverCard title="Expert Curation"
                           text="We carefully curate a diverse network of experts from a wide range of professions, ensuring that our customers have access to the best and brightest minds in each field."
                    />
                </div>
                <div className="card2">
                    <HoverCard title="Personalized Connections"
                               text="Unlike traditional consulting services, we prioritize personalized connections between experts and customers. Whether you're seeking career advice, learning a new skill, or exploring a hobby, we'll match you with the perfect expert to meet your needs."
                    />
                </div>
                <div className="card3">
                    <HoverCard title="Transparent Pricing"
                               text="We believe in transparency and fairness. Our pricing is straightforward and affordable, with no hidden fees or surprises. You'll always know exactly what you're paying for and what to expect."
                    />
                </div>
                <div className="card4">
                    <HoverCard title="Community Engagement"
                               text="Expert.io is more than just a platform—it's a community. Join our vibrant community of experts and customers to share knowledge, ask questions, and connect with like-minded individuals from around the world."
                    />
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default AboutUs;