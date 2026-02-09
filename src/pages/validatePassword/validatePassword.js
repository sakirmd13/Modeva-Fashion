// validatePassword.js
// ✅ Returns an object with password rules
export default function validatePassword(password) {
  return {
    length: password.length >= 8,
    number: /\d/.test(password),
    upperLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}
