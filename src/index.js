import './styles/app.scss'

const modalCheckYourIQ = document.getElementById("modal__check-your-iq");

const modalClose = "modal_close";
const modalAnimation = "modal_animation";

modalCheckYourIQ.classList.add(modalClose);


setTimeout(()=> {

    modalCheckYourIQ.classList.remove(modalClose);
}, 1000)