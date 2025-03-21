import { closeSidebar, clickHam } from "../../components/navbar/navbar.js";
import { activeUserStorage } from "../../utils/usersStorage.js";
import { renderShoppingCart, quickContentShoppingCart } from "../../components/shoppingCart/shoppingCart.js";
/* import { changeHamMeny } from "../../components/navbar/changeHamNav.js"; */

closeSidebar(), clickHam()  /* changeHamMeny(); */

export function buildMenu(menu) {
    menu.items.forEach((menuItem) => {

        if (menuItem.type === 'wonton') {
            buildWonton(menuItem)
        }

        if (menuItem.type === 'dip') {
            buildDip(menuItem)
        }

        if (menuItem.type === 'drink') {
            buildDrink(menuItem)
        }

    })
}

function buildWonton(wonton) {
    let menuWontonRef = document.querySelector(".menu__wontons")

    menuWontonRef.innerHTML += ` 
        <div class="menu__wonton" tabindex="${wonton.id}" id="${wonton.id}">    
            <div class="menu__wonton-name">    
                    <h3>${wonton.name}</h3>
                    <h3>${wonton.price} sek</h3>
                </div>
                <div class="menu__wonton-detail">
                    <p>${wonton.ingredients.join(", ")}</p>
                </div>    
            </div>
        </div>
    `

    setTimeout(() => {
        let newWonton = document.getElementById(wonton.id);
        if (newWonton) {
            newWonton.addEventListener("click", () => handleMenuItemClick(wonton.id));

            newWonton.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(wonton.id);
                }
            });

            newWonton.setAttribute("tabindex", "0");
        }
    }, 0);

}


function buildDip(dip) {
    let menuDipsRef = document.querySelector(".menu__dips")
    document.querySelector(".menu__dip-price").textContent = `${dip.price} sek`

    menuDipsRef.innerHTML += `
        <div class="menu__dips-dip" tabindex="${dip.id}" id="${dip.id}">
                <p>${dip.name}</p>
        </div>
    `
    setTimeout(() => {
        let newDip = document.getElementById(dip.id);
        if (newDip) {
            newDip.addEventListener("click", () => handleMenuItemClick(dip.id));
            newDip.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(dip.id);
                }
            });

            newDip.setAttribute("tabindex", "0");
        }
    }, 0);
}

function buildDrink(drink) {
    let menuDrinksRef = document.querySelector(".menu__drinks")
    document.querySelector(".menu__drink-price").textContent = `${drink.price} sek`

    menuDrinksRef.innerHTML += `
        <div class="menu__drinks-drink" tabindex="${drink.id}" id="${drink.id}">
                <p>${drink.name}</p>
        </div>
    `
    setTimeout(() => {
        let newDrink = document.getElementById(drink.id);
        if (newDrink) {
            newDrink.addEventListener("click", () => handleMenuItemClick(drink.id));

            newDrink.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    handleMenuItemClick(drink.id);
                }
            });

            newDrink.setAttribute("tabindex", "0");
        }
    }, 0);
}

function handleMenuItemClick(itemId) {
    console.log('clicked');
    const activeCustomer = activeUserStorage.getActiveUser();
    activeCustomer.addItemToShoppingCart(itemId)
    renderShoppingCart(activeCustomer.getShoppingCart())
    quickContentShoppingCart()
}

export function filterMenu() {
    let toggleWontonsRef = document.querySelector("#toggleWontons")
    toggleWontonsRef.addEventListener('change', function () {
        if (toggleWontonsRef.checked) {
            document.querySelector(".menu__wontons").classList.remove("d-none")
        } else {
            document.querySelector(".menu__wontons").classList.add("d-none");
        }
    })

    let toggleDipsRef = document.querySelector("#toggleDips")
    toggleDipsRef.addEventListener('change', function () {
        if (toggleDipsRef.checked) {
            document.querySelector(".menu__dips").classList.remove("d-none")
            document.querySelector(".menu__dips-price").classList.remove("d-none")
        } else {
            document.querySelector(".menu__dips").classList.add("d-none")
            document.querySelector(".menu__dips-price").classList.add("d-none")
        }
    })

    let toggleDrinksRef = document.querySelector("#toggleDrinks")
    toggleDrinksRef.addEventListener('change', function () {
        if (toggleDrinksRef.checked) {
            document.querySelector(".menu__drinks").classList.remove("d-none")
            document.querySelector(".menu__drinks-price").classList.remove("d-none")
        } else {
            document.querySelector(".menu__drinks").classList.add("d-none")
            document.querySelector(".menu__drinks-price").classList.add("d-none")
        }
    })

}

export function menuItemClick() {

    document.querySelectorAll(".menu__wonton").forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.add("menu__clicked")
            console.log("testar");

            setTimeout(() => {
                item.classList.remove("menu__clicked")
            }, 300)

        })
    })

    document.querySelectorAll(".menu__dips-dip").forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector(".menu__dips-price").classList.add("menu__clicked")
            console.log("testar");

            setTimeout(() => {
                document.querySelector(".menu__dips-price").classList.remove("menu__clicked")
            }, 300)

        })
    })

    document.querySelectorAll(".menu__drinks-drink").forEach((item) => {
        item.addEventListener("click", () => {
            document.querySelector(".menu__drinks-price").classList.add("menu__clicked")
            console.log("testar");

            setTimeout(() => {
                document.querySelector(".menu__drinks-price").classList.remove("menu__clicked")
            }, 300)

        })
    })

}

/* document.addEventListener("DOMContentLoaded", function () {
    changeHamMeny();
}) */