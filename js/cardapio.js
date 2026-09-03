fetch("Dados/produtos.json")
.then(function(resposta){
    return resposta.json();
})
.then(function(produtos){
    console.log(produtos);
});