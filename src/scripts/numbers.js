const { random } = require("lodash");

import EXAMPLE_OF_NUMBERS from "./../storage/numbers.json";

export default () => {
    const hrefMts = document.getElementById("mts");
    const hrefMegafon = document.getElementById("megafon");
    const hrefBeeline = document.getElementById("beeline");
    const hrefTele2 = document.getElementById("tele2");

    setLinkToElement(hrefMts, getRandomElement(EXAMPLE_OF_NUMBERS.mts));
    setLinkToElement(hrefMegafon, getRandomElement(EXAMPLE_OF_NUMBERS.megafon));
    setLinkToElement(hrefBeeline, getRandomElement(EXAMPLE_OF_NUMBERS.beeline));
    setLinkToElement(hrefTele2, getRandomElement(EXAMPLE_OF_NUMBERS.tele2));
};

function getRandomElement(list) {
    const min = 0;
    const max = list.length - 1;
    const randomIndex = random(min, max);

    return list[randomIndex];
}

function setLinkToElement(element, link) {
    element.href = `tel:${link}`;
}
