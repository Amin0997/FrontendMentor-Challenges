const inputCardNumber = document.querySelector('.card-number_input');
const inputCvc = document.querySelector('.input_cvc');
const inputCardholderName = document.querySelector('.name_input')
const monthInput = document.querySelector('.month_input')
const yearInput = document.querySelector('.year_input')

// INPUTS CORRECTION

inputCardholderName.addEventListener('input', function(event) {
    const cardName = event.target.value.replace(/[^a-zA-Z]/g, '');
    event.target.value = cardName;
});
  
  inputCardNumber.addEventListener('input', function (event) {
  const inputText = event.target.value.replace(/\D/g, '').substring(0, 16);
  event.target.value = inputText.replace(/(.{4})/g, '$1 ').trim();
});

  monthInput.addEventListener('input', function (event) {
    const monthValue = event.target.value.replace(/\D/g, '').substring(0, 2);
    event.target.value = monthValue;
});

  yearInput.addEventListener('input', function (event) {
    const yearValue = event.target.value.replace(/\D/g, '').substring(0, 2);
    event.target.value = yearValue;
});

  inputCvc.addEventListener('input', function(event) {
    const cvcNum = event.target.value.replace(/\D/g, '').substring(0, 3);
    event.target.value = cvcNum;
});

// CHECK FUNCTIONS

function checkNumber() {
    const outputCardNumber = document.querySelector('.card__front-number');
    const numberError = document.querySelector('.number-error')

    if (inputCardNumber.value.length === 19) {
        outputCardNumber.innerHTML = inputCardNumber.value;
        
        inputCardNumber.style.border = '';
        numberError.innerHTML = '';
    } 
    else if (inputCardNumber.value.length === 0) {
        numberError.innerHTML = "Cant't be blank";
        inputCardNumber.style.border = '1px solid red' 
    }
    else{
        inputCardNumber.style.border = '1px solid red';
        numberError.innerHTML = 'Wrong format, not enough numbers';
    }
}

function checkName() {
    const outputCardholderName = document.querySelector('.card__front-name');
    const nameError = document.querySelector('.name-error')

    if (inputCardholderName.value.split(' ').length === 2) {
        outputCardholderName.innerHTML = inputCardholderName.value;
        nameError.innerHTML = '';
        inputCardholderName.style.border = '';
    } 
    else if (inputCardholderName.value.length === 0) {
        nameError.innerHTML = "Cant't be blank";
        inputCardholderName.style.border = '1px solid red';
     } 
     else {
        nameError.innerHTML = 'Input your first and last names';
        inputCardholderName.style.border = '1px solid red';
    }
}

function checkDate() {
    const outputDate = document.querySelector('.card__front-date');
    const dateError = document.querySelector('.date-error');

    if (monthInput.value.length === 0 && yearInput.value.length === 0){
    dateError.innerHTML = "Can't be blank";
    monthInput.style.border = '1px solid red';
    yearInput.style.border = '1px solid red';
    } 
    else if (monthInput.value.length === 0) {
    dateError.innerHTML = "Month can't be blank";
    monthInput.style.border = '1px solid red';
    yearInput.style.border = '';
    } 
    else if (yearInput.value.length === 0) {
    dateError.innerHTML = "Year can't be blank";
    yearInput.style.border = '1px solid red';
    monthInput.style.border = '';
    } 
    else if (monthInput.value > 12) {
    dateError.innerHTML = "Must be a valid month";
    monthInput.style.border = '1px solid red';
    yearInput.style.border = '';
    } 
    else if (yearInput.value < 23) {
    dateError.innerHTML = "Must be a valid year";
    yearInput.style.border = '1px solid red';
    monthInput.style.border = '';
    } 
    else {
    outputDate.innerHTML = monthInput.value + '/' + yearInput.value;
    monthInput.style.border = '';
    yearInput.style.border = '';
    dateError.innerHTML = '';
    }
}

function checkCvc() {
    const outputCvc = document.querySelector('.card__back-cvc')
    const cvcError = document.querySelector('.cvc-error')

    if (inputCvc.value.length === 3) {
        outputCvc.innerHTML = inputCvc.value;
        cvcError.innerHTML = ''
        inputCvc.style.border = ''
    } 
    else if (inputCvc.value.length === 0) {
        cvcError.innerHTML = "Cant't be blank";
        inputCvc.style.border = '1px solid red'
    } 
    else if (inputCvc.value.length < 3) {
        cvcError.innerHTML = 'Wrong format, not enough numbers';
        inputCvc.style.border = '1px solid red';
    }
}

// function showError(message) {
//     cvcError.innerHTML = message;
//     inputCvc.style.border = '1px solid red';
//   }


function runAll() {
    checkName()
    checkNumber()
    checkDate()
    checkCvc()
}