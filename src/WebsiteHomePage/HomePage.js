import React from 'react';
import ContentBlock1 from './HomePageContentBlock1';
import WhatWeDoSection from './HomePageWhatWeDoSection';
import Header from "./Header";
import Footer from "./Footer"; // Assuming ContentBlock1 component is in a separate file

const HomePage = () => {
    return (
        <div>
            <header>
                {/* Add header content here */}
                <Header />
            </header>
            <main>
                <ContentBlock1 />
                <WhatWeDoSection />
                {/* Add other content blocks or components for the home page */}
            </main>
            <footer>
                {/* Add footer content here */}
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;