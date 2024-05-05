function calcularGastos() {
    // Obtém os valores dos inputs
    const distanciaInput = document.getElementById("distancia").value;
    const consumoInput = document.getElementById("consumo").value;
    const precoInput = document.getElementById("preco").value;
    
    // Verifica se os campos estão preenchidos
    if (distanciaInput === "" || consumoInput === "" || precoInput === "") {
        alert("Por favor, preencha todos os campos.");
        return; // Retorna para evitar cálculos com valores inválidos
    }

    // Converte os valores para números
    const distancia = parseFloat(distanciaInput);
    const consumo = parseFloat(consumoInput);
    const preco = parseFloat(precoInput);

    // Verifica se os valores são números válidos
    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco)) {
        alert("Por favor, insira valores numéricos válidos.");
        return; // Retorna para evitar cálculos com valores inválidos
    }
    
    // Calcula o total gasto com combustível
    const totalGasto = (distancia / consumo) * preco;
    
    // Exibe o resultado na página HTML
    document.getElementById("resultado").innerHTML = "Total gasto com combustível: R$ " + totalGasto.toFixed(2);
    
    // Chama a função para adicionar ao histórico após o resultado ser exibido
    alertaHistorico(totalGasto);
}

function alertaHistorico(totalGasto) {
    // Adiciona os dados ao histórico
    if (confirm("Adicionar Ao Historico ? \n\nTotal gasto com combustível: R$ " + totalGasto.toFixed(2))) {
        alert("Adicionado");
        // Cria um objeto com os dados
        const dados = {
            distancia: parseFloat(document.getElementById("distancia").value),
            consumo: parseFloat(document.getElementById("consumo").value),
            preco: parseFloat(document.getElementById("preco").value),
            totalGasto: totalGasto
        };
        adicionarAoHistorico(dados);
    } else {
        alert("Cancelado");
    }
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
