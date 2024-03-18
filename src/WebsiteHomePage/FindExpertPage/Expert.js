import React from 'react';
import './Expert.css';
import Typography from '@mui/joy/Typography';

const Expert = () => {
    return (
        <div className="expert">
            <div className="expert-column-1">
                {/* Image of the expert */}
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286" alt="Expert" />

                {/* Link to view full profile */}
                <div className="expert-link">
                    <a href="#">View full profile</a>
                </div>

            </div>
            <div className="expert-column-2">
                {/* Details of the expert */}
                <div className="expert-details">
                    <h3>Name</h3>
                    <p>John Doe</p>
                </div>
                <div className="expert-details">
                    <h3>Designation</h3>
                    <p>Software Engineer</p>
                </div>
                <div className="expert-details">
                    <h3>Working at</h3>
                    <p>ABC Company</p>
                </div>
                <div className="expert-details">
                    <h3>Charges per session</h3>
                    <p>$100</p>
                </div>
                <div className="expert-details">
                    <h3>Companies worked at</h3>
                    <p>Company A, Company B, Company C</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;
