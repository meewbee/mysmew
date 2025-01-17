const messagesContainer = document.getElementById('messages');

// Função para gerar um novo balão de mensagem
function generateMessage() {
  const messageText = document.getElementById('message-input').value;
  const character = document.getElementById('character-select').value;

  // Se não houver mensagem, não faz nada
  if (!messageText) return;

  // Cria um novo balão de mensagem
  const message = document.createElement('div');
  message.classList.add('message-bubble', character);  // Adiciona a classe do personagem para a cor do balão

  // Adiciona o nome do personagem acima do balão
  message.innerHTML = `
    <div class="message-info">${character}</div>
    <div class="message-content">${messageText}</div>
    <div class="message-actions">
      <button onclick="editMessage(this)">Editar</button>
      <button onclick="deleteMessage(this)">Deletar</button>
    </div>
  `;

  // Define se a mensagem vai para a esquerda (outros personagens) ou direita (MC)
  message.classList.add(character === 'MC' ? 'right' : 'left');

  // Adiciona a mensagem ao container
  messagesContainer.appendChild(message);

  // Limpa o campo de entrada após o envio
  document.getElementById('message-input').value = '';
}

// Função para editar uma mensagem
function editMessage(button) {
  const messageContent = button.closest('.message-bubble').querySelector('.message-content');
  const newText = prompt("Edite sua mensagem:", messageContent.innerText);

  if (newText) {
    messageContent.innerText = newText;
  }
}

// Função para deletar uma mensagem
function deleteMessage(button) {
  const message = button.closest('.message-bubble');
  messagesContainer.removeChild(message);
}

// Função para limpar todas as mensagens
function clearMessages() {
  messagesContainer.innerHTML = '';
}
