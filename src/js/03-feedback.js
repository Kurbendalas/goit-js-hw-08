import throttle from 'lodash.throttle';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const storedState = localStorage.getItem(feedbackFormStateKey);
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const clearFormState = () => {
  localStorage.removeItem(feedbackFormStateKey);
  emailInput.value = '';
  messageInput.value = '';
};

feedbackForm.addEventListener('input', saveFormState);
window.addEventListener('DOMContentLoaded', loadFormState);
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
  clearFormState();
});
