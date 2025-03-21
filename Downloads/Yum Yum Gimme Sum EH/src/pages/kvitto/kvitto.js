import { closeSidebar, clickHam } from "../../components/navbar/navbar.js";
import { activeUserStorage } from "../../utils/usersStorage.js";
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";

closeSidebar(), clickHam(), changeHamMeny();

function menuBtn() {
    const menuBtn = document.querySelector(".ny-beställning-btn");
    const navigateToMenu = () => {
        window.location.href = "../menu/menu.html";
    };
    
    menuBtn.addEventListener('click', navigateToMenu);
    menuBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateToMenu();
        }
    });
}

menuBtn();


    function renderReceipt() {
        let activeCustomer = activeUserStorage.getActiveUser();
        let orderNumber = localStorage.getItem("orderNumber");

        let contentContainer = document.querySelector('.kvitto__content');
        let totalSumElement = document.querySelector('.kvitto__total--summa');
        let orderNumDiv = document.querySelector('.kvitto__order-nummer');


        orderNumDiv.textContent = `#${orderNumber}`;

        contentContainer.innerHTML = ""; 

        let totalSum = 0;

        activeCustomer.shoppingCart.forEach(item => {
            
            let textContent = `
            <div class="kvitto__row">
                <div class="kvitto__info">
                    <p class="kvitto__content--title">${item.name}</p>
                    <p class="kvitto__content--antal">${item.quantity} stycken</p>
                </div>
                <div class="kvitto__price">
                    <p class="kvitto__price--text">${item.price * item.quantity} KR</p>
                </div>
             </div>
            `;

            contentContainer.innerHTML += textContent;

            totalSum += item.price * item.quantity * 1.25;
        });

        
        totalSumElement.textContent = `${totalSum} SEK`;
    }

    renderReceipt();


