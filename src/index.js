// const config = require('config');
import './style.css';

const DisplayChat = require('../modules/Display.js');

const form = document.getElementById('btn');

// eslint-disable-next-line no-undef
const socket = io(config.get('URL'), {
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
  window.scrollTo(0, document.body.scrollHeight);
});
