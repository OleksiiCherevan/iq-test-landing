import './styles/app.scss'

import { setRandomNumberByID } from './scripts/numbers';


const elementMts = document.getElementById("mts");
const elementMegafon = document.getElementById("megafon");
const elementBeeline = document.getElementById("beeline");
const elementTele2 = document.getElementById("tele2");

elementMts.addEventListener("click", () => {
    setRandomNumberByID(elementMts.id);
});
elementMegafon.addEventListener("click", () => {
    setRandomNumberByID(elementMegafon.id);
});
elementBeeline.addEventListener("click", () => {
    setRandomNumberByID(elementBeeline.id);
});
elementTele2.addEventListener("click", () => {
    setRandomNumberByID(elementTele2.id);
});

const modalCheckYourIQ = document.getElementById("modal__check-your-iq");
const modalOpen = "modal_open";

setTimeout(()=> {
    modalCheckYourIQ.classList.add(modalOpen);
}, 1000)




