const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
  
app.get('/posts', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Faz uma solicitação GET para a URL fornecida
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na rede');
      }
      return response.json();
    })
    .then(data => {
        res.json(data); // Resposta JSON
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
})

app.post('/posts_salvar', async (req, res) =>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar post', error });
    }
});

app.get('/posts:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ message: 'Erro ao buscar o post', error });
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


