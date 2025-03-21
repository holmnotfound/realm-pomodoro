export function randomTimer(){
    return Math.floor(Math.random() * 11) + 10; 
}

export function displayETA() {
    const etaText = document.getElementById("eta-time");
    if (etaText) {
        etaText.textContent = `LEVERANSTID: ${randomTimer()} MIN`
    }
}