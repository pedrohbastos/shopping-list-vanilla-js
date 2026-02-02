const listElement = document.querySelector(".shopping-list");
const inputElement = document.querySelector(".item-input");
const formElement = document.querySelector(".add-item-form");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderItem() {
  listElement.innerHTML = "";

  tarefas.forEach((todo, index) => {
    const liElement = document.createElement("li");
    liElement.classList.add("item");

    const spanElement = document.createElement("span");
    spanElement.textContent = todo;

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "✕";
    buttonElement.classList.add("delete-btn");

    buttonElement.addEventListener("click", () => {
      deletarItem(index);
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);
    listElement.appendChild(liElement);
  });
}

renderItem();

function adicionarTarefas(event) {
  event.preventDefault();

  if (inputElement.value.trim() === "") {
    alert("Digite algum item");
    return;
  }

  tarefas.push(inputElement.value.trim());
  inputElement.value = "";

  renderItem();
  salvarDados();
}

formElement.addEventListener("submit", adicionarTarefas);

function deletarItem(posicao) {
  tarefas.splice(posicao, 1);
  renderItem();
  salvarDados();
}

function salvarDados() {
  localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}
