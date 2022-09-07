const fs = require('fs/promises');


const PHONE_NUMBERS_META = {
    mts : {'start': 32698000000, 'qty': 10000},
    megafon: {'start': 3218000000, 'qty': 10000},
    beeline: {'start': 6548000000, 'qty': 10000},
    tele2: {'start': 859698000000, 'qty': 10000}
}
const FILE_NUMBERS_PATH = "\\numbers.json";

const new_random_numbers = getPhoneNumbersFromMeta(PHONE_NUMBERS_META);
writePhoneNumbers(new_random_numbers);

async function writePhoneNumbers ( data, filepath=FILE_NUMBERS_PATH) {
  try {
    await fs.writeFile(__dirname + filepath, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

function getPhoneNumbersFromMeta (phone_meta, id) {
    const listPhones = {}
    
    // should make it auto
    const mts = getRandomPhoneNumbersFromOperator(phone_meta.mts);
    const megafon = getRandomPhoneNumbersFromOperator(phone_meta.megafon);
    const beeline = getRandomPhoneNumbersFromOperator(phone_meta.beeline);
    const tele2 = getRandomPhoneNumbersFromOperator(phone_meta.tele2);
    
    // should make it auto
    listPhones.mts = mts;
    listPhones.megafon = megafon;
    listPhones.beeline = beeline;
    listPhones.tele2 = tele2;

    return listPhones;
}


// function getRandomPhoneNumbersFromOperator(operator) {
//     const {countNumbers } = operator;
//     const numbers = [];

//     for(let i = 0; i < countNumbers; i++) {
//         const randNumber = getRandomPhoneNumber(operator);
//         numbers.push(randNumber);
//     }

//     return numbers;
// }


function getRandomPhoneNumber(operator) {
    const {start, qty} = operator;

    return Number.parseInt((Math.random() * qty)  + start);
}

