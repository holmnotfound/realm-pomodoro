import { closeSidebar, clickHam } from "../../components/navbar/navbar.js";
import { activeUserStorage } from "../../utils/usersStorage.js";
import { changeHamMeny } from "../../components/navbar/changeHamNav.js";


closeSidebar(), clickHam(), changeHamMeny();

const orderHistory = {
    orders: [
        {
            orderNumber: "ORD123456",
            orderDate: "2025-02-07",
            userId: 1,
            items: [
                {
                    id: 1,
                    name: "Karlstad",
                    description: "En god friterad wonton med smaker från de värmländska skogarna.",
                    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
                    price: 9,
                    quantity: 2,
                    type: "wonton"
                },
                {
                    id: 14,
                    name: "Fanta Exotic",
                    description: "Lorem ipsum dolor sit amet, bubbly fruity elit. Fizzy carbonated.",
                    price: 19,
                    quantity: 1,
                    type: "drink"
                }
            ]
        },
        {
            orderNumber: "ORD123457",
            orderDate: "2025-02-06",
            userId: 2,
            items: [
                {
                    id: 2,
                    name: "Bangkok",
                    description: "En god friterad wonton med smaker från Bangkoks gator.",
                    ingredients: ['morot', 'salladslök', 'chili', 'kokos', 'lime', 'koriander'],
                    price: 9,
                    quantity: 3,
                    type: "wonton"
                },
                {
                    id: 7,
                    name: "Sweet n Sour",
                    description: "Klassiska sötsura dipsåsen från Kina.",
                    price: 19,
                    quantity: 2,
                    type: "dip"
                }
            ]
        },
        {
            orderNumber: "ORD123458",
            orderDate: "2025-02-05",
            userId: 3,
            items: [
                {
                    id: 1,
                    name: "Karlstad",
                    description: "En god friterad wonton med smaker från de värmländska skogarna.",
                    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
                    price: 9,
                    quantity: 1,
                    type: "wonton"
                },
                {
                    id: 17,
                    name: "LOKA Granatäpple",
                    description: "Lorem ipsum dolor sit amet, bubbly fruity elit. Fizzy carbonated.",
                    price: 19,
                    quantity: 1,
                    type: "drink"
                },
                {
                    id: 7,
                    name: "Sweet n Sour",
                    description: "Klassiska sötsura dipsåsen från Kina.",
                    price: 19,
                    quantity: 1,
                    type: "dip"
                }
            ]
        },
        {
            orderNumber: "ORD123459",
            orderDate: "2025-02-04",
            userId: 4,
            items: [
                {
                    id: 2,
                    name: "Bangkok",
                    description: "En god friterad wonton med smaker från Bangkoks gator.",
                    ingredients: ['morot', 'salladslök', 'chili', 'kokos', 'lime', 'koriander'],
                    price: 9,
                    quantity: 2,
                    type: "wonton"
                },
                {
                    id: 14,
                    name: "Fanta Exotic",
                    description: "Lorem ipsum dolor sit amet, bubbly fruity elit. Fizzy carbonated.",
                    price: 19,
                    quantity: 1,
                    type: "drink"
                }
            ]
        },
        {
            orderNumber: "ORD123460",
            orderDate: "2025-02-03",
            userId: 5,
            items: [
                {
                    id: 1,
                    name: "Karlstad",
                    description: "En god friterad wonton med smaker från de värmländska skogarna.",
                    ingredients: ['kantarell', 'scharlottenlök', 'morot', 'bladpersilja'],
                    price: 9,
                    quantity: 1,
                    type: "wonton"
                },
                {
                    id: 17,
                    name: "LOKA Granatäpple",
                    description: "Lorem ipsum dolor sit amet, bubbly fruity elit. Fizzy carbonated.",
                    price: 19,
                    quantity: 2,
                    type: "drink"
                }
            ]
        }
    ]
};

let mainRef = document.querySelector('.main');

function renderReceipt(orderHistory) {

    mainRef.innerHTML = '';

    orderHistory.forEach(order => {
        let totalSum = 0;

        let kvittoSection = document.createElement('section');
        kvittoSection.classList.add('kvitto');
        
        let kvittoHeader = document.createElement('section');
        kvittoHeader.classList.add('kvitto__header');
        kvittoHeader.innerHTML = `
            <img class="kvitto__logga" src="../../../images/logo-red.png" alt="yum yum gimme sum logga i rött">
            <h1 class="kvitto__title">KVITTO</h1>
            <p class="kvitto__order-nummer">Order nr: ${order.orderNumber}</p>
            <p class="kvitto__order-nummer">Order datum: ${order.orderDate}</p>
        `;

        let kvittoContent = document.createElement('section');
        kvittoContent.classList.add('kvitto__content');

        order.items.forEach(item => {
            let itemHTML = `
                <div class="kvitto__info">
                    <p class="kvitto__content--title">${item.name}</p>
                    <p class="kvitto__content--antal">${item.quantity} stycken</p>
                </div>
                <div class="kvitto__line"></div>
                <div class="kvitto__price">
                    <p class="kvitto__price--text">${item.price * item.quantity} KR</p>
                </div>
            `;
            kvittoContent.innerHTML += itemHTML;

            totalSum += item.price * item.quantity;
        });

        let kvittoTotal = document.createElement('section');
        kvittoTotal.classList.add('kvitto__total');
        kvittoTotal.innerHTML = `
            <div class="kvitto__total--text">
                <p class="kvitto__total--title">TOTALT</p>
                <p class="kvitto__total--moms">inkl 20% moms</p>
            </div>
            <p class="kvitto__total--summa">${totalSum} KR</p>
        `;

        kvittoSection.appendChild(kvittoHeader);
        kvittoSection.appendChild(kvittoContent);
        kvittoSection.appendChild(kvittoTotal);

        mainRef.appendChild(kvittoSection);
    });
}

renderReceipt(orderHistory.orders);




