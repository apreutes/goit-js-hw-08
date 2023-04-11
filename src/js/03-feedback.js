import '../css/common.css';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateTextarea();

form.addEventListener('submit', onFormSubmit);
// textarea.addEventListener('input', onTextareaInput);

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    parsedData = JSON.parse(savedFormData);
    textarea.value = parsedData.message;
    input.value = parsedData.email;
    input;
    console.log(parsedData);
  }
}

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд (32:55)
