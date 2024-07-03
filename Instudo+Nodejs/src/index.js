const express = require('express');
const app = express(); 

const port = 3000; // Porta que o servidor vai rodar

app.use(express.json()) //Preparação pro express ler json - via json
//app.use(express.urlencoded()) //Preparação pro express ler urlencoded - via formulário
app.use(express.urlencoded({ extended: true }))



//Rota
app.post('/form', (req, res) => {
  let estudante = req.body
  res.send(estudante)
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});

