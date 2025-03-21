import { buildMenu, filterMenu, menuItemClick } from "./src/pages/menu/menu.js";
import { menuNew } from "./src/storage/data.js"
import { quickContentShoppingCart } from "./src/components/shoppingCart/shoppingCart.js";
import { setUpShoppingCartEventListeners } from "./src/components/shoppingCart/eventListeners.js";
import { activeUserStorage} from "./src/utils/usersStorage.js";
import { changeHamMeny } from "./src/components/navbar/changeHamNav.js";


if (window.location.pathname.includes('/src/pages/menu/menu.html')) {
    buildMenu(menuNew)
    filterMenu()
    // quickContentShoppingCart()
    menuItemClick()
    changeHamMeny();


} else if (window.location.pathname.includes('index.html')) {
    menuBtn()
    logInBtn()
  
}

if (!window.location.pathname.includes('index.html')) {
    quickContentShoppingCart()
}

checkIfLoggedIn();

setUpShoppingCartEventListeners();

function menuBtn() {
    const menuBtn = document.querySelector(".landing__button--primary");
    const navigateToMenu = () => {
        window.location.href = "src/pages/menu/menu.html";
    };

    menuBtn.addEventListener('click', navigateToMenu);
    menuBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateToMenu();
        }
    });
}

function logInBtn() {
    const menuBtn = document.querySelector(".landing__button--secondary");
    const navigateToMenu = () => {
        
        window.location.href = "src/pages/login/login.html";
        checkActiveUser();
    };

    menuBtn.addEventListener('click', navigateToMenu);
    menuBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {

            navigateToMenu();
        }
    });
}

function checkActiveUser(){
     const activeUser = activeUserStorage.getActiveUser();

        if (activeUser) { 
            localStorage.removeItem("activeCustomer");
            console.log('loggar ut');
        }
        else {
            return
        }
}


function checkIfLoggedIn() {
    const activeUser = activeUserStorage.getActiveUser(); 
    console.log(activeUser); 

    if (activeUser === null) {
        return; 
    }

    const buttonText = document.querySelector(".landing__button--secondary");
    if (buttonText) { 
        buttonText.innerHTML = "LOGGA UT"; 
    }
}
