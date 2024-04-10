
const express = require('express');
const app = express(); 
const port = 3000; // Porta que o servidor vai rodar
app.use(express.json()) //Preparação pro express ler json

app.get('/', (req, res) => {
  res.send('Hello World! Formandos 2025');
});

app.post('/', function(req, res){
  console.log(req.body?.nome) // ? -> Preparar que em caso de nulo não quebrar a aplicar
  console.log(req.body?.email)
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});