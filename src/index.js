import './style.css';

const DisplayChat = require('../modules/Display.js');

const form = document.getElementById('btn');

// const enviroment = process.env.NODE_ENV;
// const URL = enviroment === 'development' ? 'http://localhost:3000' : 'https://radiant-lowlands-52016.herokuapp.com/';
// eslint-disable-next-line no-undef
const socket = io('https://kiq.herokuapp.com/', {
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
