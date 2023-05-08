const inputDay = document.querySelector('.birthday__input--day');
const inputMonth = document.querySelector('.birthday__input--month');
const inputYear = document.querySelector('.birthday__input--year');

let localDay = new Date().getDate();
let localMonth = new Date().getMonth() + 1;
let localYear = new Date().getFullYear();

let outputDay = document.querySelector('.output__days p');
let outputMonths = document.querySelector('.output__months p');
let outputYears = document.querySelector('.output__years p');

// ERRORS select
const errorDayMsg = document.querySelector('.error__day-message');
const errorMonthMsg = document.querySelector('.error__month-message');
const errorYearMsg = document.querySelector('.error__year-message');

const dayTxt = document.querySelector('.birthday__input-day_text');
const monthTxt = document.querySelector('.birthday__input-month_text');
const yearTxt = document.querySelector('.birthday__input-year_text');

const dayInput = document.querySelector('.birthday__input--day');
const monthInput = document.querySelector('.birthday__input--day');
const yearInput = document.querySelector('.birthday__input--year');


function submit() {

    const monthsDays = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const zeroLength = 2;

// YEARS CALC
    let neededYear;

    if (localMonth < inputMonth.value) {
        neededYear = (inputYear.value - localYear) * -1 - 1;
    } else if (localMonth == inputMonth.value) {
        neededYear = (inputYear.value - localYear);
    } else {
        neededYear = (inputYear.value - localYear) * -1;
    }

// MONTH CALC
    let neededMonth;

     if (inputMonth.value > localMonth) {
        neededMonth = 12 - (inputMonth.value - localMonth);
    } else if (inputMonth.value < localMonth) {
        neededMonth = localMonth - inputMonth.value;
    } else if (inputMonth.value == localMonth && inputDay.value == localDay) {
         neededMonth = 0;
    } else if (inputMonth.value == localMonth && inputDay.value < localDay){
        neededMonth = 0;
    } else if (inputMonth.value == localMonth && inputDay.value > localDay){
        neededMonth = 11;
    }

// DAYS CALC
    let neededDay;

    if (inputDay.value > localDay) {
        neededDay = monthsDays[localMonth] - (inputDay.value - localDay);
    } else {
        neededDay = localDay - inputDay.value;
    }

// RESULT OUTPUT
    outputYears.innerHTML = neededYear;
    outputMonths.innerHTML = neededMonth;
    outputDay.innerHTML = String(neededDay).padStart(zeroLength, '0');

// ERRORS
    function dayError() {
        errorDayMsg.innerHTML = 'Must be a valid day';
        dayTxt.classList.add('color-red');
        dayInput.classList.add('border-red');
    }   
    
    function monthError() {
        errorMonthMsg.innerHTML = 'Must be a valid month';
        monthTxt.style.color = '#FF5959';
        monthInput.style.border = '1px solid #FF5959';
    }
    
    function yearError() {
        errorYearMsg.innerHTML = 'Must be in the past';
        yearTxt.style.color = '#FF5959';
        yearInput.style.border = '1px solid #FF5959';
    }

    function clearError() {
        errorDayMsg.innerHTML = '';
        dayTxt.classList.remove('color-red');
        dayInput.classList.remove('border-red');
    }
    
// VALID INPUT CHECK
    if (inputDay.value > 31) {
        dayError()
        outputDay.innerHTML = '--';
    } else {
        clearError();
    }

    if (inputMonth.value > 12) {
        monthError()
        outputMonths.innerHTML = '--';
    }

    if (inputYear.value > localYear) {
        yearError()
        outputYears.innerHTML = '--';
    }
}
