import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

let feedback = {};

openPage();
form.addEventListener('input', throttle(saveLocalStore, 500));
form.addEventListener('submit', submitForm);

function openPage() {
  const localGet = localStorage.getItem(STORAGE_KEY);
  if (!localGet) {
    return;
  }
  try {
    feedback = JSON.parse(localGet);
    inputEmail.value = feedback.email || '';
    inputMessage.value = feedback.message || '';
  } catch {
    console.error('LocalStorage is brocken');
  }
}

function saveLocalStore(e) {
  feedback[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function submitForm(e) {
  e.preventDefault();
  if (!inputEmail.value || !inputMessage.value) {
    window.alert('Some data is empty');
    return;
  }

  console.log(feedback);
  localStorage.removeItem(STORAGE_KEY);
  inputEmail.value = '';
  inputMessage.value = '';
}
