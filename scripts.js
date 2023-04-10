const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorMsg = document.querySelector('#error-msg');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (username.value.trim() === '' && password.value.trim() === '') {
    errorMsg.textContent = 'Please enter your username and password.';
  } else if (username.value.trim() === '') {
    errorMsg.textContent = 'Please enter your username.';
  } else if (password.value.trim() === '') {
    errorMsg.textContent = 'Please enter your password.';
  } else {
    console.log('Login successful.');
  }
});

username.addEventListener('focus', () => {
  username.style.backgroundColor = '#f0f0f0';
  password.style.backgroundColor = '#fff';
});

password.addEventListener('focus', () => {
  password.style.backgroundColor = '#f0f0f0';
  username.style.backgroundColor = '#fff';
});
