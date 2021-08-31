const divListagem = document.getElementById('listagem');



const listaProduto = () => {
    const infoProduto = document.createElement('div');
    const imagem = document.createElement('img');
    const tituloProduto = document.createElement('h2');
    const priceProduto = document.createElement('div');

    imagem.classList.add('rounded');
    imagem.classList.add('img_produto');
    imagem.classList.add('img_fluid');

    tituloProduto.className = 'desc_produto'; // uma forma de colocar um nome em uma class como so tem um nao ocorrera problema caso tenha mais de um usar a forma de cima 
    priceProduto.className = 'preco_produto'; // uma forma de colocar um nome em uma class
    // rounded, img_produto e img_fluid ====> classe de elemento
}


// https://api.mercadolibre.com/sites/MLB/search?q=camisas 
const buscarProdutos = async (genero) => {
    const  listadeProdutos = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${genero}`); // await vai forcar meu resultado da api esperar para jogar pra minha resolucao abaixo
    const listadeProdutosJson = await listadeProdutos.json();
    
    // console.log(listadeProdutosJson.results);
};
//      fetch('https://api.mercadolibre.com/sites/MLB/search?q=camisas').then((resolve)=>{
//         resolve.json().then((produtos => {
//             console.log(produtos.results);
//         })) //json tabm é uma promisse o then vai pegar a resposta da promisse do jason
//     }) // then pegar o retorno da api 

// }

window.onload = () => {
    buscarProdutos('camisas-infantil');
};