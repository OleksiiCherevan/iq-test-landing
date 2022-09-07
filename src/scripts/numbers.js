const { random } = require("lodash");

import EXAMPLE_OF_NUMBERS from "./../storage/numbers.json";

const PHONE_NUMBERS_META = {
    mts : {'start': 32698000000, 'qty': 10000},
    megafon: {'start': 3218000000, 'qty': 10000},
    beeline: {'start': 6548000000, 'qty': 10000},
    tele2: {'start': 859698000000, 'qty': 10000}
}

export default () => {    
    
};

export function setRandomNumberByID(id) {
    const element = document.getElementById(id);
    setLinkToElement(element, getRandomNumber(id));
}


function getRandomNumber(id) {
    const operator  = PHONE_NUMBERS_META[id];
    const {start, qty} =  operator;

    const result = Number.parseInt((Math.random() * qty)  + start);
    console.log(result);
    return result
}

function setLinkToElement(element, link) {
    element.href = `tel:${link}`;
}

// function getPhoneNumbersFromMeta (phone_meta, id) {
//     const listPhones = {}
    
//     // should make it auto
//     const mts = getRandomPhoneNumbersFromOperator(phone_meta.mts);
//     const megafon = getRandomPhoneNumbersFromOperator(phone_meta.megafon);
//     const beeline = getRandomPhoneNumbersFromOperator(phone_meta.beeline);
//     const tele2 = getRandomPhoneNumbersFromOperator(phone_meta.tele2);
    
//     // should make it auto
//     listPhones.mts = mts;
//     listPhones.megafon = megafon;
//     listPhones.beeline = beeline;
//     listPhones.tele2 = tele2;

//     return listPhones;
// }
