// Função para buscar dados de uma API usando fetch
function buscarPosts() {
    fetch('https://jsonplaceholder.typicode.com/users') // Faz uma solicitação GET para a URL fornecida
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na rede');
        }
        return response.json();
      })
      .then(data => {
        for(i = 0; i < data.length; i++){
            if(data[i].name[0] == "C" )
            console.log(data[i].name);
        }
      })
      .catch(error => {
        // Tratar erros, como problemas de rede
        console.error('Erro ao buscar dados:', error);
      });
  }
  
  // Chama a função para buscar dados
  buscarPosts();
  