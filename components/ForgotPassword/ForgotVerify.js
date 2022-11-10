import VerifyEmail from '../VerifyEmail';
import VerifyPassword from '../VerifyPassword';
export default function ForgotVerify(data) {
    // Credential verification

    // Email Verification
    if (!(VerifyEmail(data.email))) { // If email is invalid
        return 4; // Return error code
    }
    // Password Verification
    else { // If there are no invalid credentials
        return 1; // Return success code
    }
}