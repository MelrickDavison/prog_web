const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //Preparação pro express ler json - via json
//app.use(express.urlencoded()) //Preparação pro express ler urlencoded - via formulário
app.use(express.urlencoded({ extended: true }))


app.post('/salvar', (req, res) => {
let nome = req.body.nome;
let nota1 = req.body.nota1;
let nota2 = req.body.nota2;
let media = (nota1 + nota2) / 2;

if (media < 6) {
  res.status(500).json({
    mensagem: "Estudar MAIS"
  });
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})