const button = document.querySelector('.salvar');
const nome = document.querySelector('#nome');
const url = document.querySelector('#url');
const list = document.querySelector('.contatos');

const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

contatos.forEach((contato) => {
  exibeNomes(contato);
});

button.addEventListener('click', () => {
  const contato = {
    nome: nome.value,
    url: url.value,
  };
  contatos.push(contato);
  exibeNomes(contato);
  localStorage.setItem('contatos', JSON.stringify(contatos));
  limparCampoNome();
});

function limparCampoNome() {
  nome.value = '';
  url.value = '';
}

function exibeNomes(contato) {
  list.innerHTML += `<div class="contato"> <img src="${contato.url}"> ${contato.nome}</div>`;
}
