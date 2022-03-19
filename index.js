const form = document.getElementById('btn');
const li = document.createElement('li');
const chatList = document.querySelector('.chat');

// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000', {
  withCredentials: true,
});

form.addEventListener('click', (e) => {
  const message = document.getElementById('message');
  e.preventDefault();
  const { value } = message;
  li.classList.toggle('aliceblue');

  if (value) {
    socket.emit('message', value);
  }
  message.value = '';
});

socket.on('chat message', (msg) => {
  li.textContent = msg;
  chatList.appendChild(li);
  li.classList.toggle('aliceblue');
  window.scrollTo(0, document.body.scrollHeight);
});
