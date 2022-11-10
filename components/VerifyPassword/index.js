export default function VerifyPassword(password) {
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; // 6 to 16 characters & 1 special character
    return re.test(password);
}
