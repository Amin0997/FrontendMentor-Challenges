const inputDay = document.querySelector('.birthday__input--day');
const inputMonth = document.querySelector('.birthday__input--month');
const inputYear = document.querySelector('.birthday__input--year');

const submitButton =  document.querySelector('.submit__btn');

let localDay = new Date().getDate();
let localMonth = new Date().getMonth() + 1;
let localYear = new Date().getFullYear();

let outputDay = document.querySelector('.output__days p');
let outputMonths = document.querySelector('.output__months p');
let outputYears = document.querySelector('.output__years p');

let zeroLength = 2;

function submit() {

// YEARS OUTPUT
    let neededYear = (inputYear.value - localYear) * -1;

    if (localMonth < inputMonth.value) {
        neededYear -= 1;
    }
    outputYears.innerHTML = neededYear;


// MONTH OUTPUT
    let neededMonth = inputMonth.value - localMonth;

     if (inputMonth.value > localMonth) {
        outputMonths.innerHTML = 12 - neededMonth;
        
    } else if (neededMonth < 0) {
        neededMonth = 12 - neededMonth * (-1);
        outputMonths.innerHTML = neededMonth;
    } else if (inputMonth.value == localMonth) {
        neededMonth = 0;
        outputMonths.innerHTML = neededMonth;
    }


// DAYS OUTPUT
    let neededDay;

    if (inputDay.value > localDay) {
        neededDay = 30 - (inputDay.value - localDay);
        neededMonth -= 1;
    } else {
        neededDay = localDay - inputDay.value
    }
    outputDay.innerHTML = String(neededDay).padStart(zeroLength, '0');
}