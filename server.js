const express = require('express');
var cors = require('cors')
require('dotenv').config()
const app = express();
const port = 3001;
let key = process.env.apiKey
app.use(cors())
app.get('/', async (req, res) => {
    let cidade = req.query.cidade
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    res.json(dados);
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});