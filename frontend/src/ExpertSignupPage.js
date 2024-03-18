import React, { useState } from 'react';
import './ExpertSignupPage.css'; // Import CSS file for styling
import validators from './validators.js';

function ExpertSignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        profession: '',
        experience: '',
        company: '',
        workEmail: '',
        personalEmail: '',
        phoneNumber: '',
        linkedIn: '',
        password: ''
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

        // Perform validation using the imported validators
        for (const field in formData) {
            if (!formData[field] && field !== 'workEmail' && field !== 'linkedIn') {
                validationErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        }
        if (!validators.isValidEmail(formData.personalEmail)) {
            validationErrors.personalEmail = 'Invalid email format';
        }
        if (formData.workEmail && !validators.isValidEmail(formData.workEmail)) {
            validationErrors.workEmail = 'Invalid email format';
        }
        if (!validators.isValidPhoneNumber(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Invalid phone number format';
        }
        if (!validators.isValidPassword(formData.password)) {
            validationErrors.password = 'Password must be 8 characters long with at least one capital letter, one digit, and one special character';
        }
        setErrors(validationErrors);

        // If there are no validation errors, submit the form data
        if (Object.keys(validationErrors).length === 0) {
            // Add logic to submit form data to server
            console.log(formData);
        }
    };

    return (
        <div className="expert-signup">
            <h2>Expert Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                    {errors.dob && <span className="error-message">{errors.dob}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="profession">Profession:</label>
                    <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Profession</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Developer">Developer</option>
                        <option value="Full Stack Engineer">Full Stack Engineer</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.profession && <span className="error-message">{errors.profession}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Experience (years):</label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                    {errors.experience && <span className="error-message">{errors.experience}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                    {errors.company && <span className="error-message">{errors.company}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="workEmail">Work Email:</label>
                    <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                    />
                    {errors.workEmail && <span className="error-message">{errors.workEmail}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="personalEmail">Personal Email:</label>
                    <input
                        type="email"
                        id="personalEmail"
                        name="personalEmail"
                        value={formData.personalEmail}
                        onChange={handleChange}
                        required
                    />
                    {errors.personalEmail && <span className="error-message">{errors.personalEmail}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="linkedIn">LinkedIn:</label>
                    <input
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                    />
                    {errors.linkedIn && <span className="error-message">{errors.linkedIn}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Password must be 8 characters long with at least one capital letter, one digit, and one special character"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default ExpertSignupPage;