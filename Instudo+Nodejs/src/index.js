const express = require('express');
const app = express(); 

const port = 3000; // Porta que o servidor vai rodar

app.use(express.json()) //Preparação pro express ler json - via json
//app.use(express.urlencoded()) //Preparação pro express ler urlencoded - via formulário
app.use(express.urlencoded({ extended: true }))

/*
app.post('/', function(req, res){ //req => Recupera o que enviou (Requisição) - res => Envia para o cliente
 // console.log(req.body?.nome) // ? -> Preparar que em caso de nulo não quebrar a aplicar
  let chapa = req.body.chapa
  res.send(`Olá chapa ${chapa.nome}`);
});
*/

//Rota
app.post('/form', (req, res) => {
  let estudante = req.body
  res.send(estudante)
  console.log(req.body)
});


app.get('/', (req, res) => {
  res.send(req.body);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});

