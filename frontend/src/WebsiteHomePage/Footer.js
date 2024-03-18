import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import validators from "../validators";
import './Footer.css';

function Footer () {
    const [formData, setFormData] = useState({
        email: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!validators.isValidEmail(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }
        setErrors(validationErrors);

        // If there are no validation errors, submit the form data
        if (Object.keys(validationErrors).length === 0) {
            // Add logic to submit form data to server
            console.log(formData);
        }
    };

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <a className="block" href="https://gun.io/">
                        <img className="h-12 md:h-14 lg:h-[70px] w-auto" src="https://gun.io/wp-content/uploads/2023/07/gunio-logo-text-alpha.png" alt="Expert.io" height="70" width="200" />
                    </a>
                </div>
                <section className="footer-section">
                    <h3>Platform</h3>
                    <div className="footer-platform-menu">
                        <ul className="footer-list">
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Find Expert</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Popular Experts</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">FAQ</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Pricing</a></li>
                        </ul>
                    </div>
                </section>
                <section className="footer-section">
                    <h3>Company</h3>
                    <div className="footer-company-menu">
                        <ul className="footer-list">
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">About Us</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Blog</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Podcast</a></li>
                            <li className="footer-menu-items"><a href="https://gun.io/find-work/">Press</a></li>
                        </ul>
                    </div>
                </section>
                <section className="footer-section">
                    <h3>Contact</h3>
                    <div className="footer-contact-info">
                        <p>Sign up for our newsletter to keep in touch</p>
                        <form onSubmit={handleSubmit}>
                            <div className="footer-email-container">
                                <div className="footer-email-info">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} />
                                    {errors.email && <span className="footer-error-message">{errors.email}</span>}
                                </div>
                                <button type="submit"><FaArrowRight /></button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;
