import './styles/app.scss'

import phoneNumbersScript from './scripts/numbers';

phoneNumbersScript();

const modalCheckYourIQ = document.getElementById("modal__check-your-iq");
const modalOpen = "modal_open";

setTimeout(()=> {
    modalCheckYourIQ.classList.add(modalOpen);
}, 1000)


