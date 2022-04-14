import './style.css';

const DisplayChat = require('../modules/Display.js');

const form = document.getElementById('btn');

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
  const { value } = message;
  if (value) {
    socket.emit('message', value);
  }

  DisplayChat(value);

  message.value = '';
});

socket.on('chat message', (msg) => {
  DisplayChat(msg);
});
