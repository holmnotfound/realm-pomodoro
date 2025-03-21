
export function changeHamMeny() {
    let activUserRef = localStorage.getItem('activeCustomer');

    let loginElement = document.querySelector("#last-list-item a");
    let profilElement = document.querySelector("#profil");

    if (activUserRef) {
        loginElement.textContent = "LOGGA UT";
        loginElement.href = "#";

        loginElement.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem("activeCustomer");
            showPopUp("Du loggas ut");

            setTimeout(() => {
                window.location.pathname ='index.html'; // Rätt sätt att navigera
            }, 1500); // Vänta på popup innan redirect
        });
    } else if (!activUserRef && profilElement) {
        profilElement.style.display = "none";
    }
}

const showPopUp = (message) => {
    const navContainer = document.querySelector('.nav__list--sidebar');
    if (!navContainer) return; // Skydda mot fel

    const popUpContainer = document.createElement('section');
    popUpContainer.classList.add('popup__container');

    popUpContainer.innerHTML = `
        <h2 class="popup__heading">${message}</h2>
    `;

    navContainer.appendChild(popUpContainer);

    setTimeout(() => {
        popUpContainer.remove();
    }, 1500);
};


/* export function changeHamMeny(){
    let activUserRef = localStorage.getItem('activeCustomer')

    let loginElement = document.querySelector("#last-list-item a");
    let profilElement = document.querySelector("#profil")

    if(activUserRef){
        loginElement.textContent = "LOGGA UT"
        loginElement.href = "#"

        loginElement.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem("activeCustomer");
            alert('Du loggas ut')
            showPopUp();
            window.location.pathname ='index.html';
        })
    } else if (!activUserRef){
        profilElement.style.display = "none";
    }
}

const showPopUp = (message) => {
    const navcContainer = document.querySelector('.nav__list--sidebar')
    const popUpContainer = document.createElement('section');
    popUpContainer.classList.add('popup__container');

    popUpContainer.innerHTML = `
        <h2 class="popup__heading">${message}</h2>
    `;

    navcContainer.appendChild(popUpContainer);

    setTimeout(() => {
        popUpContainer.remove();    
    }, 1500); 
} */