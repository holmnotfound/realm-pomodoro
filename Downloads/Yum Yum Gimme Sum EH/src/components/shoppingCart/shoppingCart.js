import { calculateTotal } from "../../utils/calculateTotal.js";
import { activeUserStorage } from "../../utils/usersStorage.js";



export const setUpShoppingCart = () => {
    const shoppingCartContainer = document.createElement('section');
    shoppingCartContainer.classList.add('shopping-cart__container');
    
    const shoppingCartImg = document.createElement('img');
    shoppingCartImg.src = '../../../images/shopping-cart-white.svg';
    shoppingCartImg.alt = 'knapp för att öppna kundkorgen'
    shoppingCartImg.setAttribute('tabindex', '0');
    shoppingCartImg.classList.add('shopping-cart__img')
    shoppingCartContainer.appendChild(shoppingCartImg)

    const shoppingCartList = document.createElement('ul');
    shoppingCartList.replaceChildren();
    shoppingCartList.classList.add('shopping-cart__list')
    shoppingCartList.setAttribute('aria-hidden', 'true');
    shoppingCartContainer.appendChild(shoppingCartList);

    const shoppingCartNav = document.createElement('li');
    shoppingCartNav.classList.add('shopping-cart__nav');
    
    return shoppingCartContainer; 
}

export const quickContentShoppingCart = () => {
    const activeUser = activeUserStorage.getActiveUser();
    let shoppingCart;
    
    if (activeUser) {
        shoppingCart = activeUser.getShoppingCart();
    } else {
    shoppingCart = [];
    }

    const cartIcon = document.querySelector('.shopping-cart__img');

    let cartBadge = document.querySelector('.shopping-cart__badge');
    if (cartBadge) {
        cartBadge.remove();
    }

    if (shoppingCart.length > 0) {
        cartBadge = document.createElement('span');
        cartBadge.classList.add('shopping-cart__badge');
        cartBadge.textContent = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
        cartIcon.parentElement.appendChild(cartBadge);
    }
};

export const renderShoppingCart = (shoppingCart) => {
    const shoppingCartList = document.querySelector('.shopping-cart__list');
    shoppingCartList.replaceChildren()
        
    if (shoppingCart.length === 0) {
        const emptyCartElement = createEmptyShoppingCartHtml();
        shoppingCartList.innerHTML += `${emptyCartElement}`
    }
    else {
        shoppingCart.forEach((item) => {
            const menuItemElement = createShoppingCartHTML(item);
            shoppingCartList.innerHTML += `${menuItemElement}`
        })
    }
    shoppingCartList.innerHTML += createShoppingCartNavHTML();

    const checkoutButton = document.querySelector(".shopping-cart__nav--button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            window.location.href = "../../../src/pages/shoppingcart/shoppingcart.html";
        });
    }
    if (checkoutButton) {
        checkoutButton.addEventListener("keydown", (event) => {
            if(event.key === 'Enter' || event.key === ' ')
            window.location.href = "../../../src/pages/shoppingcart/shoppingcart.html";
        });
    }
}

export const createShoppingCartHTML = (item) => {
    const{id, type, name, description, price, quantity} = item; 

    return `
        <li class="shopping-cart__list-item" data-id=${id}>
            <section class="shopping-cart__navigation">
                <a class="shopping-cart__decrement-product">
                    <img class="arrow arrow-decrement" src="../../../images/arrow-decrement.svg" alt="Remove ${name} from your order" tabindex="0"/>
                </a>
                <span class="number-of-products">${quantity}</span>
                <a class="shopping-cart__increment-product">
                    <img class="arrow arrow-increment" src="../../../images/arrow-increment.svg" alt="Add another ${name} to your order" tabindex="0"/>
                </a>
            </section>
            <section class="shopping-cart__products">
            <h2 class="shopping-cart__menu-item--heading" aria-label="${name}">
                ${name} 
            </h2>
            <h2 class="shopping-cart__menu-item--price" aria-label="${price}">
                ${price * quantity} SEK
            </h2>    
            </section>
        </li>    
    `
}

const createShoppingCartNavHTML = () => {
    const activeUser = activeUserStorage.getActiveUser();

    let total = calculateTotal(activeUser.getShoppingCart())
    return `
        <li class="shopping-cart__nav">
            <section class="wrapper">
                <h2 class="total-amount">Total: ${total} SEK</h2>
                <button class="shopping-cart__clear" aria-label="Click to clear shopping cart">
                    <img class="trash__img" src="../../../images/trash-img.svg" alt="Click to clear shopping cart"/>
                </button>
            </section>
            <button class="shopping-cart__nav--button">
                TILL KASSAN
            </button>
        </li>
    `
}

const createEmptyShoppingCartHtml = () => {
    return `
        <span class="empty-cart">Your cart is empty!</span>
    `
}