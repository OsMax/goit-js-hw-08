import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const feedbackSet = {
  email: '',
  message: '',
};

form.addEventListener(
  'input',
  throttle(e => {
    if (e.target.nodeName === 'INPUT') {
      feedbackSet.email = e.target.value.trim();
    } else {
      feedbackSet.message = e.target.value;
    }
    if (feedbackSet.email.trim() !== '') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackSet));
    }
  }, 500)
);

const localGet = localStorage.getItem(STORAGE_KEY);
if (localGet) {
  try {
    const feedbackGet = JSON.parse(localGet);
    inputEmail.value = feedbackGet.email;
    inputMessage.value = feedbackGet.inputMessage;
  } catch {
    console.error('LocalStorage is brocken');
  }
}

form.addEventListener('submit', e => {
  console.log(feedbackSet);
  localStorage.removeItem(STORAGE_KEY);
  inputEmail.value = '';
  inputMessage.value = '';
  e.preventDefault();
});
