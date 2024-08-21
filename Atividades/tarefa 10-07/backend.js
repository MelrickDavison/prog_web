const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //Preparação pro express ler json - via json
//app.use(express.urlencoded()) //Preparação pro express ler urlencoded - via formulário
app.use(express.urlencoded({ extended: true }))

let _data = {
  title: "foo",
  body: "bar", 
  userId:1
}

app.get('/', (req, res) => {
  res.send(JSON.stringify(_data))
})


// app.post('/', function (req, res) {
//   res.send(JSON.stringify(_data));
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  