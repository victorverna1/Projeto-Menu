fetch("Dados/produtos.json")
.then(function(resposta){
    return resposta.json();
})
.then(function(produtos){
    produtos.forEach(function(produto){
        const artigo = document.createElement("article");
        artigo.classList.add("produto");
        console.log(artigo)
    });
});