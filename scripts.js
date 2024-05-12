
// font Api https://home.openweathermap.org/api_keys


function colocarDadosNaTela(dados) {
  
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+"°C" 

  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity+"%"

  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {

const dados = await fetch(`http://localhost:3001?cidade=${cidade}`).then(resposta => resposta.json())

colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
const cidade = document.querySelector(".input-cidade").value

buscarCidade(cidade)
}