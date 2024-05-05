// Função para carregar e exibir o histórico do localStorage
function carregarHistorico() {
    // Obtém o elemento onde o histórico será exibido
    const historicoElement = document.getElementById('historico');

    // Obtém os dados do histórico do localStorage ou cria um array vazio se não houver dados
    const historicoData = JSON.parse(localStorage.getItem('historico_gastos_combustivel')) || [];
    
    // Itera sobre os dados do histórico e cria elementos HTML para exibição
    historicoData.forEach(item => {
        const linha = document.createElement('p');
        // Monta a linha com as informações do histórico, colocando as palavras em negrito
        linha.innerHTML = `<strong>Distância:</strong> ${item.distancia} km | <strong>Consumo:</strong> ${item.consumo} km/L | <strong>Preço:</strong> R$ ${item.preco} | <strong>Total:</strong> R$ ${item.totalGasto.toFixed(2)}`;
        historicoElement.appendChild(linha);
        
        // Adiciona uma quebra de linha entre cada mensagem do histórico
        historicoElement.appendChild(document.createElement('br'));
    });
}

// Chama a função para carregar o histórico quando a página carrega
document.addEventListener('DOMContentLoaded', carregarHistorico);

// Função para limpar o histórico de gastos com combustível
function limparHistorico() {
    // Remove o histórico do localStorage
    localStorage.removeItem('historico_gastos_combustivel');

    // Limpa o conteúdo do elemento HTML onde o histórico é exibido
    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML = '';

    // Adiciona uma mensagem informando que o histórico foi limpo
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Histórico limpo.';
    historicoElement.appendChild(mensagem);
}

// Função para voltar para a página de gastos de combustível
function voltarParaGastos() {
    window.location.href = 'index.html';
}
