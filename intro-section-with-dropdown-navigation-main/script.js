const companyLink = document.querySelector('.company-link');
const featuresLink = document.querySelector('.features-link');

const featuresDropdown = document.querySelector('.dropdown--features');
const companyDropdown = document.querySelector('.dropdown--company');

let isCompanyDropdownShown = false;
let isFeaturesDropdownShown = false;

companyLink.addEventListener('click', function(event) {
  event.stopPropagation(); 

  if (!isCompanyDropdownShown) {
    companyDropdown.classList.add('show');
    isCompanyDropdownShown = true;
  } else {
    companyDropdown.classList.remove('show');
    isCompanyDropdownShown = false;
  }
});

featuresLink.addEventListener('click', function(event) {
  event.stopPropagation(); 

  if (!isFeaturesDropdownShown) {
    featuresDropdown.classList.add('show');
    isFeaturesDropdownShown = true;
  } else {
    featuresDropdown.classList.remove('show');
    isFeaturesDropdownShown = false;
  }
});

document.addEventListener('click', function(event) {
  const target = event.target;

  if (!target.closest('.company-link') && !target.closest('.dropdown--company')) {
    companyDropdown.classList.remove('show');
    isCompanyDropdownShown = false;
  }

  if (!target.closest('.features-link') && !target.closest('.dropdown--features')) {
    featuresDropdown.classList.remove('show');
    isFeaturesDropdownShown = false;
  }
});
