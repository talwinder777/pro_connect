import React from 'react';
import './SignIn.css'; // Import CSS file

const SignInForm = () => {
    return (
        <div className="expert-signin">
            <h2 className="sign-in-heading">Sign In</h2>
            <form className="signin-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit" className="submit-button">Sign In</button>
            </form>
        </div>

    );
};

export default SignInForm;
