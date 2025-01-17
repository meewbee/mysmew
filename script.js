const chatContainer = document.getElementById('chat-container');
const userSelect = document.getElementById('user-select');
const messageInput = document.getElementById('message-input');
const addMessageButton = document.getElementById('add-message');
const clearMessagesButton = document.getElementById('clear-messages');
const bgButtons = document.querySelectorAll('.background-selector button');

// Adicionar mensagem
addMessageButton.addEventListener('click', () => {
  const user = userSelect.value;
  const message = messageInput.value;
  if (!message) return;

  const newMessage = document.createElement('div');
  newMessage.classList.add('message', user === 'MC' ? 'right' : '');
  newMessage.setAttribute('data-user', user);
  newMessage.innerHTML = `
    <span class="username">${user}</span>
    <div class="bubble">${message}</div>
  `;

  chatContainer.appendChild(newMessage);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll automático
  messageInput.value = ''; // Limpa o input
});

// Limpar mensagens
clearMessagesButton.addEventListener('click', () => {
  chatContainer.innerHTML = '';
});

// Alterar background
bgButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.backgroundImage = `url('${button.dataset.bg}.jpg')`;
  });
});
