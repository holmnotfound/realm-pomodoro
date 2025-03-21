import { Customer } from "../../utils/createUsers.js";
import { storeUsers } from "../../utils/usersStorage.js";



const form = document.querySelector('#register-form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const formDataObj = Object.fromEntries(formData.entries());
    
    if(validateRegistration(formDataObj)) {
        const newUser = new Customer(formDataObj.username, formDataObj.password, 'Customer', formDataObj.email, formDataObj.profile_image);
        storeUsers.addUserToStorage(newUser);

        const button = document.querySelector('#register-btn--register'); 
        button.innerText = 'Du är registrerad!'

        const inputFields = document.querySelectorAll('input');
        inputFields.forEach(field => field.classList.add('green-transition') )
        

        setTimeout(() => {
            window.location.href = "../../../src/pages/login/login.html"
        }, 2000);
    }
})


const validateRegistration = (formDataObj) => {
    console.log(formDataObj)

    const trimmedPassword = formDataObj.password.trim();
    const trimmedPasswordRepeat = formDataObj.passwordRepeat.trim();

    if (trimmedPassword === trimmedPasswordRepeat) {
        return true; 
    }
    else {
        const passwordLabel = document.querySelector('#passwordLabel')
        const passwordRepeatLabel = document.querySelector('#passwordRepeatLabel');
        password.classList.add('invalid-color')
        passwordRepeat.classList.add('invalid-color');
    } 
}