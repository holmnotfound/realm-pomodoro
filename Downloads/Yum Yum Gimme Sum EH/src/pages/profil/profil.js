import { activeUserStorage, storeUsers } from "../../utils/usersStorage.js"
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";

changeHamMeny();

const setUpUserProfile = () => {
    const activeUser = activeUserStorage.getActiveUser()
    setUpUserName(activeUser.username);
    setUpProfilePic(activeUser.profile_image);
    setUpUserEmail(activeUser.email);
    setUpUserPassword(activeUser.password);
    setUpChangeEmailButton();
    setUpChangePasswordButton();
    setUpSaveChangesButton(activeUser);
}


const setUpUserName = (username) => {
    const userNameElement = document.querySelector('.username');
    userNameElement.innerText = username;
}

const setUpProfilePic = (profilePic) => {
    const profilePicElement = document.querySelector('.profile-pic-link');
    profilePicElement.innerText = profilePic === undefined ? 'No pic available' : profilePic;
}

const setUpUserEmail = (email) => {
    const emailInput = document.querySelector('#email-input');
    emailInput.classList.add('hide-element')
    const userEmailElement = document.querySelector('.email')
    userEmailElement.innerText = email;
}

const setUpUserPassword = (password) => {
    const passwordInputNew = document.querySelector('#password-input-new');
    passwordInputNew.classList.add('hide-element');


    const userPasswordElement = document.querySelector('.password')
    const passwordStarred = password.replace(/./g, '*')
    userPasswordElement.innerText = passwordStarred;
}

const setUpChangeEmailButton = () => {
    const button = document.querySelector('#change-email-button');
    const emailInput = document.querySelector('#email-input');
    const userEmailElement = document.querySelector('.email')

    button.addEventListener('click', () => {
        emailInput.classList.toggle('hide-element')
        userEmailElement.classList.toggle('hide-element')
    })
}

const setUpChangePasswordButton = () => {
    const button = document.querySelector('#change-password-button');
    const passwordInputNew = document.querySelector('#password-input-new');
    const passwordElement = document.querySelector('.password');

    button.addEventListener('click', () => {
        passwordInputNew.classList.toggle('hide-element')
        passwordElement.classList.toggle('hide-element')
    })
}

const setUpSaveChangesButton = (activeUser) => {
    const form = document.querySelector('#user-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const passwordNew = formData.get('password-new')
        const emailNew = formData.get('email')
        
        if (passwordNew !== null) {
            if (validateNewPassword(passwordNew)) {
                activeUser.password = passwordNew;
                activeUserStorage.saveUsers();
                storeUsers.updateUser(activeUser);
                resetForm()
                showPopUp()
            }
        }

        if (emailNew !== null) {
            if (validateNewEmail(emailNew)) {
                activeUser.email = emailNew;
                activeUserStorage.saveUsers();
                storeUsers.updateUser(activeUser);
                resetForm()
                showPopUp()
            }            
        }
        setTimeout(() => {
            window.location.href = 'profil.html'
        }, 1500);
    })
}

const validateNewEmail = (newEmail) => {
    const email = newEmail.trim();
    return email.length > 5 && email.includes('@', '.');
}

const validateNewPassword = (newPassword) => {
    const password = newPassword.trim();
    return password.length >= 5 && password.length <= 15;
}

const resetForm = () => {
    let passwordInputNew = document.querySelector('#password-input-new');
    const passwordElement = document.querySelector('.password');
    let emailInput = document.querySelector('#email-input');
    const userEmailElement = document.querySelector('.email')
    
    emailInput.value = '';
    passwordInputNew.value = '';
}

const showPopUp = () => {
    const formContainer = document.querySelector('.user-form')
    const popUpContainer = document.createElement('section');
    popUpContainer.classList.add('popup__container');
    
    popUpContainer.innerHTML = `
        <h2 class="popup__heading">Ändringar sparade!</h2>
    `

    formContainer.appendChild(popUpContainer)

    setTimeout(() => {
        popUpContainer.remove();    
    }, 1500);
}


setUpUserProfile();