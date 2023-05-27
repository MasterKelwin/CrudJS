const produtos = [
    {
        nome: 'Bola',
        valor: 25,
        estoque: 10
    },
    {
        nome: 'Tênis',
        valor: 50,
        estoque: 20
    }
];
const clientes = [
    {
        nome: 'Kelwin',
        saldo: 150,
        produtos: []
    },
    {
        nome: 'Karla',
        saldo: 40,
        produtos: []
    }
]

//Criar produto (create)
function criaProduto(nome, valor, estoque) {
    const obj = {nome: nome, valor: valor, estoque: estoque}
    produtos.push(obj)
}

//Ver Produtos (read)
function verProdutos() {
    console.log(produtos);
    return produtos;
}

//Atualizar produtos(update)
function atualizaProduto(nome, novoValor, novoEstoque) {
    const index = produtos.findIndex(produto => produto.nome === nome);
    if(novoValor) {
        produtos[index].valor = novoValor;
    }
    if(novoEstoque) {
        produtos[index].estoque = novoEstoque; 
    }
}

//Excluir produtos(delete)
function excluirProduto(nome) {
    const index = produtos.findIndex(produto => produto.nome === nome);
    produtos.splice(index, 1)
}




//COMPRAR PRODUTOS
function comprarProdutos(produto, cliente, quantidade) {
    const produtoIndex = produtos.findIndex(item => item.nome === produto);
    const clienteIndex = clientes.findIndex(item => item.nome === cliente);

    const valorDaCompra = produtos[produtoIndex].valor * quantidade;

    if(clientes[clienteIndex].saldo >= valorDaCompra) {
        console.log(`Compra aprovada`)
        clientes[clienteIndex].saldo = clientes[clienteIndex].saldo - valorDaCompra;
        produtos[produtoIndex].estoque = produtos[produtoIndex].estoque - quantidade;
        let i = 1;
        while(i <= quantidade) {
            i++;
            clientes[clienteIndex].produtos.push(produto);
        }
        console.log(clientes[clienteIndex]);
        console.log(produtos[produtoIndex]);
    } else {
        console.log('Saldo insuficiente.')
    }

}

comprarProdutos('Bola', 'Kelwin', 4)
// criaProduto('Luvas', 20, 150);
// atualizaProduto('Bola', null, 40)
// excluirProduto('Tênis');

// verProdutos();
