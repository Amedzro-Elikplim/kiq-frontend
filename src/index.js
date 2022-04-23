import './style.css';

const DisplayChat = require('../modules/Display.js');

const form = document.querySelector('i');

let URL = 'https://kiq.herokuapp.com';

if (window.location.href === 'http://localhost:8080/') {
  URL = 'http://localhost:3000';
}

// eslint-disable-next-line no-undef
const socket = io(URL, {
  withCredentials: true,
});

form.addEventListener('click', (e) => {
  e.preventDefault();
  const message = document.getElementById('message');
  if (message.value) {
    const { value } = message;
    if (value) {
      socket.emit('message', value);
    }

    DisplayChat(value);

    message.value = '';
  }
});

socket.on('chat message', (msg) => {
  DisplayChat(msg);
});

const message = document.getElementById('message');
message.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const { value } = message;
    if (value) {
      socket.emit('message', value);
    }

    DisplayChat(value);

    message.value = '';
    e.preventDefault();
  }
});
