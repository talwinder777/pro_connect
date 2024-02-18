import React from 'react';
import ContentBlock1 from './HomePageContentBlock1';
import Header from "./Header"; // Assuming ContentBlock1 component is in a separate file

const HomePage = () => {
    return (
        <div>
            <header>
                {/* Add header content here */}
                <Header />
            </header>
            <main>
                <ContentBlock1 />
                {/* Add other content blocks or components for the home page */}
            </main>
            <footer>
                {/* Add footer content here */}
            </footer>
        </div>
    );
};

export default HomePage;