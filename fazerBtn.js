const cor = document.querySelector("#cor");

const tamanho = document.querySelector("#sizeBtn");

const altura = document.querySelector("#altura");

const form = document.querySelector(".form");

const criar = document.querySelector("#criar");

form.appendChild(cor, tamanho, altura);

const model = [];

cor.addEventListener("change", function (e) {
    model.push(e.target.value)
});

tamanho.addEventListener("change", function (e) {
    model.push(e.target.value)
});

altura.addEventListener("change", function (e) {
    model.push(e.target.value)
});

form.addEventListener("submit", function (e) {
    e.preventDefault()
});



criar.addEventListener("click", function () {
    const btn = document.createElement("button", model);
    btn.style.background = model[2];
    btn.style.width = model[0];
    btn.style.height = model[1];
    btn.innerText = "btn de teste";

    form.appendChild(btn);

});

