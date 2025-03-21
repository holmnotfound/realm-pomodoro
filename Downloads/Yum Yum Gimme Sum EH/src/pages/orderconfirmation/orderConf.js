import { displayETA } from "../../utils/randomNumber.js";
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";

changeHamMeny();

// Funktionerna nedan laddar ett ordernummer varje gång sidan laddas om, sparar ordernumret och ser till att det är unikt
const usedOrderNumbers = new Set();

function generateOrderNumber() {
    let orderNumber;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    do {
        orderNumber = Array.from({ length: 11 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    } while (usedOrderNumbers.has(orderNumber)); // Se till att det är unikt

    usedOrderNumbers.add(orderNumber); // Sparar ordernumret

    localStorage.setItem("orderNumber", orderNumber);

    return orderNumber;
}

document.addEventListener("DOMContentLoaded", () => {
    displayETA();
    const orderNumberElement = document.getElementById("ordernumber");
    if (orderNumberElement) {
        orderNumberElement.textContent = "#" + generateOrderNumber();
    }
});