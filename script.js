const messagesContainer = document.getElementById('messages');
let messageCount = 0;

// Função para gerar um novo balão de fala
function generateMessage() {
  const messageText = prompt("Digite sua mensagem:");
  const character = document.getElementById('character-select').value;

  if (!messageText) return;

  messageCount++;
  
  const message = document.createElement('div');
  message.classList.add('message-bubble');
  
  message.innerHTML = `
    <div class="message-content">${messageText}</div>
    <div class="message-info">
      <strong>${character}</strong> 
      <small>Mensagem #${messageCount}</small>
    </div>
    <div class="message-actions">
      <button onclick="editMessage(${messageCount})">Editar</button>
      <button onclick="deleteMessage(${messageCount})">Deletar</button>
    </div>
  `;

  message.setAttribute('data-id', messageCount);
  message.classList.add(character === 'MC' ? 'right' : 'left'); // Alinhamento de acordo com o personagem

  messagesContainer.appendChild(message);
}

// Função para editar uma mensagem
function editMessage(id) {
  const message = document.querySelector(`[data-id="${id}"] .message-content`);
  const newText = prompt("Edite sua mensagem:", message.innerText);

  if (newText) {
    message.innerText = newText;
  }
}

// Função para deletar uma mensagem
function deleteMessage(id) {
  const message = document.querySelector(`[data-id="${id}"]`);
  messagesContainer.removeChild(message);
}

// Função para limpar todas as mensagens
function clearMessages() {
  messagesContainer.innerHTML = '';
}

