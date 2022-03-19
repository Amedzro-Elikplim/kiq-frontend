const form = document.getElementById('btn');

// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000', {
  withCredentials: true,
});

form.addEventListener('click', (e) => {
  const message = document.getElementById('message');
  const li = document.createElement('li');
  const chatList = document.querySelector('.chat');
  e.preventDefault();
  const { value } = message;

  li.classList.toggle('aliceblue');

  if (value) {
    socket.emit('message', value);
  }

  li.innerHTML = value;
  chatList.appendChild(li);

  message.value = '';
});

socket.on('chat message', (msg) => {
  const chatList = document.querySelector('.chat');
  const li = document.createElement('li');
  li.textContent = msg;

  chatList.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
});
