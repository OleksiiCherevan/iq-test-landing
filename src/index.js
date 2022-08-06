import './styles/app.scss'

const modalCheckYourIQ = document.getElementById("modal__check-your-iq");

const modalOpen = "modal_open";

setTimeout(()=> {
    modalCheckYourIQ.classList.add(modalOpen);
}, 1000)