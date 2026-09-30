let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-ajuda");
let modal = document.querySelector(".botao-ajuda");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal() {
modal.style.display = "block";
}

function fechaModal() {
modal.style.display = "none";
}