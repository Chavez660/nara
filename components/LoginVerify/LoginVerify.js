import VerifyEmail from '../VerifyEmail';
import VerifyPassword from '../VerifyPassword';
export default function LoginVerify(data) {
    // Credential verification

    // Email Verification
    if (!(VerifyEmail(data.email))) { // If email is invalid
        return 4; // Return error code
    }
    // Password Verification
    else if (!(VerifyPassword(data.password1))) { // If password is not valid
        return 5; // Return error code
    }
    else { // If there are no invalid credentials
        return 1; // Return success code
    }
}