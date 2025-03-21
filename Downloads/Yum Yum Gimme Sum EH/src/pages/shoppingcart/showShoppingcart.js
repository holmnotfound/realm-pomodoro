import { changeProductAmountClick } from '../../components/shoppingCart/eventListeners.js';
import { createShoppingCartHTML, quickContentShoppingCart } from '../../components/shoppingCart/shoppingCart.js';
import { activeUserStorage } from '../../utils/usersStorage.js';
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";


changeHamMeny();


const menuItemsContainer = document.querySelector('.menu-items');
const orderButton = document.querySelector('.order__button--primary');

function updateOrderButtonAction() {
    const activeCustomer = activeUserStorage.getActiveUser();
    const shoppingCart = activeCustomer ? activeCustomer.getShoppingCart() : [];

    if (shoppingCart.length === 0) {
        orderButton.disabled = true;
        orderButton.classList.add("disabled");
    } else {
        orderButton.disabled = false;
        orderButton.classList.remove("disabled");
    }
}

export function renderCart() {
    const activeCustomer = activeUserStorage.getActiveUser();
    const shoppingCart = activeCustomer ? activeCustomer.getShoppingCart() : [];

    menuItemsContainer.innerHTML = '';

    if (shoppingCart.length > 0) {
        shoppingCart.forEach((item) => {
            const menuItemElement = createShoppingCartHTML(item);
            menuItemsContainer.innerHTML += menuItemElement;
        });
    } else {
        menuItemsContainer.textContent = "Din kundkorg är tom.";
    }

    const totalAmount = shoppingCart.reduce((total, item) => total + item.quantity * item.price, 0);
    let totalAmountMoms = totalAmount * 1.25;
    const totalAmountElement = document.querySelector('.total-amount-checkout');
    
    if (totalAmountElement) {
        totalAmountElement.textContent = `${totalAmountMoms} SEK`;
    }
    quickContentShoppingCart()
    updateOrderButtonAction();
}

orderButton.addEventListener('click', (e) => {
    const activeCustomer = activeUserStorage.getActiveUser();
    const shoppingCart = activeCustomer ? activeCustomer.getShoppingCart() : [];

    if (shoppingCart.length === 0) {
        console.log("Kundkorgen är tom.");
        e.preventDefault();
    } else {
        window.location.href = '../orderconfirmation/orderConf.html';
    }
});

renderCart()

changeProductAmountClick(menuItemsContainer);
menuItemsContainer.addEventListener('click', () => {
    renderCart()
    quickContentShoppingCart()
})

updateOrderButtonAction();
menuItemsContainer.addEventListener('click', () => {
    menuItemsContainer.innerHTML = '';
    renderCart();
    quickContentShoppingCart()
    updateOrderButtonAction();
});