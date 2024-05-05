function calcularGastos() {
    // Obtém os valores dos inputs
    const distancia = parseFloat(document.getElementById("distancia").value);
    const consumo = parseFloat(document.getElementById("consumo").value);
    const preco = parseFloat(document.getElementById("preco").value);
    
    // Calcula o total gasto com combustível
    const totalGasto = (distancia / consumo) * preco;
    
    // Exibe o resultado na página HTML
    document.getElementById("resultado").innerHTML = "Total gasto com combustível: R$ " + totalGasto.toFixed(2);
    
    // Cria um objeto com os dados
    const dados = {
        distancia: distancia,
        consumo: consumo,
        preco: preco,
        totalGasto: totalGasto
    };

    // Adiciona os dados ao histórico
    confirm("Adicionar Ao Historico ?") ? (alert("Adicionado"), adicionarAoHistorico(dados)) : alert("cancelado");
    // adicionarAoHistorico(dados);
    
}

function adicionarAoHistorico(dados) {
    // Obtém o histórico atual do localStorage ou cria um novo array vazio
    const historico = JSON.parse(localStorage.getItem('historico_gastos_combustivel')) || [];

    // Adiciona os novos dados ao histórico
    historico.push(dados);

    // Atualiza o histórico no localStorage
    localStorage.setItem('historico_gastos_combustivel', JSON.stringify(historico));
}

function limparCampos() {
    document.getElementById("distancia").value = "";
    document.getElementById("consumo").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function irParaHistorico() {
    window.location.href = 'historico.html';
}
