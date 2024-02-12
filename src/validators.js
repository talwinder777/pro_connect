// validators.js
const validators = {
    isEmpty: (value) => value.trim() === '',
    isValidEmail: (email) => /\S+@\S+\.\S+/.test(email),
    isValidPhoneNumber: (phoneNumber) => /^\d{10}$/.test(phoneNumber),
    isValidPassword: (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
};

export default validators;