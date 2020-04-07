const cor = document.querySelector("#cor");

const sizeBtn = document.querySelector("#sizeBtn");

const height = document.querySelector("#altura");

const btnEnviar = document.querySelector("#btnEnviar");
const form = document.querySelector("form");
const model = [];


cor.addEventListener("change", function (e) {
    e.target.value;
    console.log(e.target.value)
    model.push(e.target.value);
});

sizeBtn.addEventListener("change", function (e) {
    e.target.value;
    console.log(e.target.value)
    model.push(e.target.value);
});

height.addEventListener("change", function (e) {
    e.target.value;
    console.log(e.target.value)
    model.push(e.target.value);
});

form.addEventListener("submit", function (e) {
    e.preventDefault()
});

const button = document.createElement("button", model);
button.style.background = model[0];
button.style.width = model[1];
button.style.height = model[2];

btnEnviar.addEventListener("click", button);
form.append(button);