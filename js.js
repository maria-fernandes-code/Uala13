const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("calcular");

botao.addEventListener("click", calcularIMC);

function calcularIMC() {
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.innerHTML = "<span class='perigo'>Por favor, insira valores válidos.</span>";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let classe = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    classe = "alerta";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
    classe = "normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
    classe = "alerta";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau I";
    classe = "perigo";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau II";
    classe = "perigo";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
    classe = "perigo";
  }

  resultado.innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
    <span class="${classe}">${classificacao}</span>
  `;
}

// Pressionar Enter também calcula
[pesoInput, alturaInput].forEach(input => {
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") calcularIMC();
  });
});