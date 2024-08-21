async function buscarPostsAsync(){
    try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
             throw new Error('Erro na rede'); 
            }

        const data = await response.json()
        console.log('Dados recebidos:', data)

    } catch (error){
        console.error('Erro ao buscar posts:', error)
    }

}

buscarPostsAsync()