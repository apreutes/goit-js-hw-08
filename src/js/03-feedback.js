import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populateForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  if (textarea.value === '' || input.value === '') {
    alert('Please fill the form!');
  } else {
    console.log(formData),
      evt.currentTarget.reset(),
      localStorage.removeItem(STORAGE_KEY),
      (formData = {});
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedForm) {
    if (savedForm.email) {
      input.value = savedForm.email;
    }
    if (savedForm.message) {
      textarea.value = savedForm.message;
    }
  }
}
