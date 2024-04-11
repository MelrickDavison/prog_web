const express = require('express');
const app = express(); 
const port = 3000; // Porta que o servidor vai rodar
app.use(express.json()) //Preparação pro express ler json

app.get('/', (req, res) => {
  res.send('Hello World! Formandos 2025');
});

app.post('/', function(req, res){ //req => Recupera o que enviou (Requisição) - res => Envia para o cliente
 // console.log(req.body?.nome) // ? -> Preparar que em caso de nulo não quebrar a aplicar
  let chapa = req.body.chapa
  res.send(`Olá chapa ${chapa.nome}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});

/* No Postman (body): 
{
        "chapa": {
            "nome": "TURN",
            "presidencia": "Alicia",
            "vice-presidencia": "Gabriel",
            "secretario_geral": "Helysson"
        }
}
*/