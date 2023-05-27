const produtos = [
    {
        nome: 'Teclado',
        valor: 250,
        estoque: 10
    },
    {
        nome: 'Mouse',
        valor: 150,
        estoque: 20
    }
];
const clientes = [
    {
        nome: 'Kelwin',
        saldo: 1500,
        produtos: []
    },
    {
        nome: 'Karla',
        saldo: 400,
        produtos: []
    }
];

//Criar produto (create)
function criaProduto(nome, valor, estoque) {
    const obj = {nome: nome, valor: valor, estoque: estoque};
    produtos.push(obj);
}

//Ver Produtos (read)
function verProdutos() {
    console.log(produtos);
    return produtos;
}

//Atualizar produtos(update)
function atualizaProduto(nome, novoValor, novoEstoque) {
    const index = produtos.findIndex(item => item.nome == nome);

    if(novoValor) {
        produtos[index].valor = novoValor;
    }
    if(novoEstoque) {
        produtos[index].estoque = novoEstoque;
    }
}

//Excluir produtos(delete)
function excluirProduto(nome) {
    const index = produtos.findIndex(item => item.nome == nome);
    produtos.splice(index, 1);
}

//COMPRAR PRODUTOS
function comprarProduto(nomeProduto, nomeCliente, quantidade) {
    const produtoIndex = produtos.findIndex(item => item.nome == nomeProduto);
    const clienteIndex = clientes.findIndex(item => item.nome == nomeCliente);
    const valorDaCompra = produtos[produtoIndex].valor * quantidade;

    if(clientes[clienteIndex].saldo >= valorDaCompra) {
        clientes[clienteIndex].saldo = clientes[clienteIndex].saldo - valorDaCompra;
        produtos[produtoIndex].estoque = produtos[produtoIndex].estoque - quantidade;
        let i = 1;
        while(i <= quantidade) {
            i++;
            clientes[clienteIndex].produtos.push(nomeProduto);
        }
        console.log(clientes[clienteIndex]);
        console.log(produtos[produtoIndex]);
    } else {
        console.log('Saldo insuficiente');
    }

}

// criaProduto('Monitor', 500, 1000);
// atualizaProduto('Teclado', 1000, 20)
// excluirProduto('Mouse');
comprarProduto('Teclado', 'Kelwin', 3);
// verProdutos();

