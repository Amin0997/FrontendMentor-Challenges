const adviceGenerator = document.querySelector('.advice__generator');
const adviceNumber = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');
const requestURL = 'https://api.adviceslip.com/advice';

adviceGenerator.addEventListener('click', () => {
        fetch(requestURL)
          .then(response => response.json())
          .then(data => {
            const adviceId = data.slip.id;
            const advice = data.slip.advice;
            adviceNumber.textContent = `advice # ${adviceId}`
            adviceText.textContent = `${advice}`;
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
)