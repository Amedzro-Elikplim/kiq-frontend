const form = document.getElementById('btn');

// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000', {
  withCredentials: true,
});

form.addEventListener('click', (e) => {
  const message = document.getElementById('message');
  e.preventDefault();
  const { value } = message;

  if (value) {
    socket.emit('message', value);
  }
  message.value = '';
});
