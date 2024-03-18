import React from 'react';
import './FindExpert.css'; // Import CSS file for styling
import Expert from './Expert';

const FindExpertPage = () => {
    return (
        <div className="find-expert-page">
            {/* First column */}
            <div className="column-1">
                <div className='search-tittle'>
                    <p>Start searching for your dream expert/mentor</p>
                </div>
                <div className='search-box'>
                    <input type="text" placeholder="Enter search keywords" />
                </div>

            </div>

            {/* Second column */}
            <div className="column-2">
                {/* Scrollable list of expert subcomponents */}
                <div className="expert-list">
                    {/* Dummy expert subcomponents */}
                    <div className="expert-subcomponent">
                        <Expert />
                    </div>
                    <div className="expert-subcomponent">
                        <Expert />
                    </div>
                    <div className="expert-subcomponent">
                        <Expert />
                    </div>
                    <div className="expert-subcomponent">
                        <Expert />
                    </div>


                    <div className="expert-subcomponent">Expert subcomponent 2</div>
                    {/* Add more expert subcomponents as needed */}
                </div>
            </div>
        </div>
    );
};

export default FindExpertPage;