let campoCidade = document.querySelector("#cidade");
let elementoMensagem = document.querySelector("#mensagem");
let elementoCidades = document.querySelector ("#cidades")

campoCidade.addEventListener("keydown", function (evento) {
  if (evento.key == "Enter") {
    buscarCidades();
  }
});

async function buscarCidades() {
  let nome = campoCidade.value;

  elementoMensagem.textContent = "Buscando...";

  let resposta = await fetch(
    `https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`,
  );
  let dados = await resposta.json();


    if (resposta.ok) {
        for( let i = 0; i < dados.length; i++) {
            let elementoCidade = document.createElement("p");     
            elementoCidade.textContent = `${dados[i].nome} -${dados[i].estado}`;
            elementoCidades.classList.add("cidade");
            elementoCidades.appendChild(elementoCidade);
        }

       elementoMensagem.textContent = "";
    }else {
    elementoMensagem.textContent = dados.message;
  }
}

 await function buscarPrevisao(id){

  let resposta = await fetch(
    `https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`,
  );
}