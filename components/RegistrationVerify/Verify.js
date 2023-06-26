import VerifyEmail from '../VerifyEmail';
import VerifyPassword from '../VerifyPassword';
export default function Verify(data) {
    // Credential verification
    if (!data.first_name) { // If firstname is empty
        return 2; // Return error code
    }
    // Last name verification
    else if (!data.last_name) {  // If lastname is empty
        return 3; // Return error code
    }
    // Email Verification
    else if (!(VerifyEmail(data.email))) { // If email is invalid
        return 4; // Return error code
    }
    // Password Verification
    else if (!(VerifyPassword(data.password))) { // If password is not valid
        return 5; // Return error code
    }
    else { // If there are no invalid credentials
        return 1; // Return success code
    }
}