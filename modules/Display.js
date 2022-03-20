const DisplayChat = (value) => {
  const li = document.createElement('li');
  const chatList = document.querySelector('.chat');

  li.className = 'list';
  li.classList.toggle('aliceblue');

  li.innerHTML = value;
  chatList.appendChild(li);
};

module.exports = DisplayChat;