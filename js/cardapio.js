const containerCafes = document.getElementById("cafes");
const containerPratos = document.getElementById("pratos");

fetch("Dados/produtos.json")
    .then(function(resposta) {

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        return resposta.json();
    })
    .then(function(produtos) {

        produtos.forEach(function(produto) {

            const artigo = document.createElement("article");
            artigo.classList.add("produto");

            const imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.alt = produto.nome;

            const titulo = document.createElement("h3");
            titulo.textContent = produto.nome;

            const descricao = document.createElement("p");
            descricao.textContent = produto.descricao;

            const preco = document.createElement("p");
            preco.classList.add("preco");
            preco.textContent = produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

            if (produto.nome === "Cappuccino") {
                imagem.classList.add("cappuccino");
            }

            artigo.appendChild(imagem);
            artigo.appendChild(titulo);
            artigo.appendChild(descricao);
            artigo.appendChild(preco);

            if (produto.categoria === "cafes") {
                containerCafes.appendChild(artigo);
            } else if (produto.categoria === "pratos") {
                containerPratos.appendChild(artigo);
            }

        });

    })
    .catch(function(erro) {
        console.error("Erro ao carregar produtos:", erro);
    });

const botaoHome = document.getElementById("botao-home");

botaoHome.addEventListener("click", function() {
    window.location.href = "index.html";
});