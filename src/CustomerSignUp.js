import React, { useState } from 'react';
import './CustomerSignUp.css'; // Import CSS file

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        profession: '',
        email: '',
        phone: '',
        linkedin: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.dob.trim()) newErrors.dob = 'Date of Birth is required';
        if (!formData.profession.trim()) newErrors.profession = 'Profession is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters long';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
            newErrors.password =
                'Password must contain at least one lowercase letter, one uppercase letter, and one number';
        if (formData.password.length > 16) newErrors.password = 'Password must be at most 16 characters long';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission here (e.g., send data to backend)
            console.log('Form submitted:', formData);
        }
    };

    const checkPasswordStrength = (password) => {
        if (password.length === 0) {
            setPasswordStrength('');
        } else if (password.length < 8) {
            setPasswordStrength('Weak');
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            setPasswordStrength('Medium');
        } else {
            setPasswordStrength('Strong');
        }
    };

    return (
        <div className="expert-signup">
            <h2 className="sign-up-heading">Sign Up</h2>
            <form onSubmit={handleFormSubmit} className="signup-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} />
                    {errors.dob && <span className="error-message">{errors.dob}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="profession">Profession:</label>
                    <select
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
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
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label>LinkedIn (optional):</label>
                    <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => {
                            handleInputChange(e);
                            checkPasswordStrength(e.target.value);
                        }}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                    {passwordStrength && <span style={{ color: 'orange' }}>Password Strength: {passwordStrength}</span>}
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
