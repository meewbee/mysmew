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
// Função para criar uma nova mensagem no chat
function addMessage(user, message, side) {
  const chatContainer = document.getElementById("chat-container");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bubble", side);
  messageDiv.setAttribute("contenteditable", false); // Impede edição inicial

  const messageContent = document.createElement("span");
  messageContent.textContent = message;

  // Adiciona o nome do usuário no balão
  const nameTag = document.createElement("div");
  nameTag.classList.add("name-tag");
  nameTag.textContent = user;

  messageDiv.appendChild(nameTag);
  messageDiv.appendChild(messageContent);

  // Adiciona as opções de edição e exclusão no balão
  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actions");

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.onclick = () => editMessage(messageDiv);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Deletar";
  deleteButton.onclick = () => deleteMessage(messageDiv);

  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);
  messageDiv.appendChild(actionsDiv);

  // Adiciona a mensagem ao chat
  chatContainer.appendChild(messageDiv);
}

// Função para editar uma mensagem
function editMessage(messageDiv) {
  const messageContent = messageDiv.querySelector("span");
  messageContent.setAttribute("contenteditable", true);
  messageDiv.setAttribute("contenteditable", true);
  messageContent.focus();
}

// Função para excluir uma mensagem
function deleteMessage(messageDiv) {
  messageDiv.remove();
}
// Funções para aplicar formatação
function applyBold(messageDiv) {
  const messageContent = messageDiv.querySelector("span");
  messageContent.classList.toggle("bold");
}

function applyItalic(messageDiv) {
  const messageContent = messageDiv.querySelector("span");
  messageContent.classList.toggle("italic");
}

function applyUnderline(messageDiv) {
  const messageContent = messageDiv.querySelector("span");
  messageContent.classList.toggle("underline");
}
function increaseFontSize(messageDiv) {
  let currentSize = parseInt(window.getComputedStyle(messageDiv.querySelector("span")).fontSize);
  if (currentSize < 24) {  // Definindo um limite de aumento
    messageDiv.querySelector("span").style.fontSize = `${currentSize + 3}px`;
  }
}
function deleteSelectedMessages() {
  const selectedMessages = document.querySelectorAll(".select-message:checked");
  selectedMessages.forEach(checkbox => {
    checkbox.parentElement.remove();
  });
}
