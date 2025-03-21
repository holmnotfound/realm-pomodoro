import { activeUserStorage, storeUsers } from "../../../src/utils/usersStorage.js";
import { ActiveCustomer} from "../../utils/createUsers.js";
import { setUpShoppingCartEventListeners } from "../../components/shoppingCart/eventListeners.js";
import { kundkorg } from "../../components/navbar/navbar.js";
import { quickContentShoppingCart } from "../../components/shoppingCart/shoppingCart.js";

//lägger till admin med inlogg x x
const storedUsers = storeUsers.getUsersInfo();
const adminExists = storedUsers.some(user => user.role === "admin");

if (!adminExists) {
    const currentAdmin = new ActiveCustomer("admin", "admin", "admin", "x", "x", []);
    storeUsers.addUserToStorage(currentAdmin);
}


//Detta måste stå kvar
    /* kundkorg(); */
 setUpShoppingCartEventListeners();
 addEventListeners(); 
/*  quickContentShoppingCart() */

const users = storeUsers.getUsersInfo();
console.log(users);


function addEventListeners() {
    const submitBtn = document.querySelector(".login-btn"); 
    if (submitBtn) {
        submitBtn.addEventListener('click', validateForm);
    }

    const registerBtn = document.querySelector(".register-btn");
    if (registerBtn) {
        registerBtn.addEventListener('click', Event => {
            window.location.href="../../../src/pages/register/register.html"
        });  
    }
}

function validateForm() {

console.log('hej')
    let email = document.getElementById("email").value;  
    let password = document.getElementById("password").value;  

    let userList = storeUsers.getUsersInfo();
    
    let user = userList.find(user => user.email === email && user.password === password);

    
  
    if (user) {
        if (user.role==="admin"){
           
            showPopUp("Loggar in som admin...");
            setTimeout(() => {
            window.location.href = "../../../src/pages/admin/admin.html";
            }, 1000);

      

   
        }
        else{
            
            const activeCustomer = new ActiveCustomer(user.username, user.password, user.role, user.email, user.profile_image, user.shoppingCart)
            activeUserStorage.addUserToStorage(activeCustomer)
            const userName = activeCustomer.username;
            console.log(userName)
            showPopUp(`Loggar in som ${userName}...`);
            setTimeout(() => {
            window.location.href = "../../../src/pages/menu/menu.html";
            }, 1000); 
        } 
    }

    else {
        showPopUp("Fel e-post/lösenord");
       
    }
}

const showPopUp = (message) => {
    const formContainer = document.querySelector('.login-form');
    const popUpContainer = document.createElement('section');
    popUpContainer.classList.add('popup__container');

    popUpContainer.innerHTML = `
        <h2 class="popup__heading">${message}</h2>
    `;

    formContainer.appendChild(popUpContainer);

    setTimeout(() => {
        popUpContainer.remove();    
    }, 1500); 
}
