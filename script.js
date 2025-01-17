// Elementos do DOM
const chatContainer = document.querySelector('.chat');
const characterSelect = document.getElementById('character-select');
const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');
const addEntryExitButton = document.getElementById('add-entry-exit');
const clearChatButton = document.getElementById('clear-chat');

// Função para criar balões de mensagem
function createMessage(character, message, type = 'message') {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', character === 'mc' ? 'right' : 'left');

  if (type === 'entry-exit') {
    messageDiv.textContent = `[${character} ${message}]`;
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontStyle = 'italic';
  } else {
    const avatar = document.createElement('img');
    avatar.src = `${character}-avatar.png`;
    avatar.alt = character;
    avatar.classList.add('avatar');

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = message;

    if (character !== 'mc') {
      messageDiv.appendChild(avatar);
    }
    messageDiv.appendChild(bubble);
    if (character === 'mc') {
      messageDiv.appendChild(avatar);
    }
  }

  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll automático
}

// Evento de enviar mensagem
sendMessageButton.addEventListener('click', () => {
  const character = characterSelect.value;
  const message = messageInput.value;
  if (message) {
    createMessage(character, message);
    messageInput.value = ''; // Limpar input
  }
});

// Evento para adicionar mensagem de entrada/saída
addEntryExitButton.addEventListener('click', () => {
  const character = characterSelect.value;
  const message = 'entrou no chat';
  createMessage(character, message, 'entry-exit');
});

// Evento para limpar o chat
clearChatButton.addEventListener('click', () => {
  chatContainer.innerHTML = '';
});
