const passwordBox = document.getElementById("doctor")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()";

const allchars = upperCase + LowerCase + numbers + symbols;

function createPassword() {
        let password = "";

        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += LowerCase[Math.floor(Math.random() * LowerCase.length)]
        password += symbols[Math.floor(Math.random() * symbols.length)]
        password += numbers[Math.floor(Math.random() * numbers.length)]


        while (length > password.length){
            password += allchars[Math.floor(Math.random() * allchars.length)]
        }

        passwordBox.value = password;
}