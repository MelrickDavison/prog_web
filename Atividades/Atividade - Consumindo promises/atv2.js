async function buscarPostsAsync() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erro na rede');
      }
      const data = await response.json();
      
      for(i = 0; i < data.length; i++){
        if((data[i].title.includes('qui'))){
            console.log(data[i]);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  buscarPostsAsync();
  