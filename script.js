const messagesContainer = document.getElementById('messages');
let messageCount = 0;

// Função para gerar um novo balão de fala
function generateMessage() {
  const messageText = document.getElementById('message-input').value;
  const character = document.getElementById('character-select').value;

  // Se não houver mensagem, não faz nada
  if (!messageText) return;

  // Incrementa a contagem da mensagem
  messageCount++;

  // Cria um novo balão de mensagem
  const message = document.createElement('div');
  message.classList.add('message-bubble');
  
  // Define a estrutura da mensagem
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

  // Se for MC, coloca à direita, caso contrário à esquerda
  message.classList.add(character === 'MC' ? 'right' : 'left');

  // Adiciona o balão de mensagem na tela
  messagesContainer.appendChild(message);

  // Limpa o campo de entrada após o envio
  document.getElementById('message-input').value = '';
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

