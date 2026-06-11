// 1. GERAÇÃO DO GRÁFICO ACESSÍVEL
const ctx = document.getElementById('graficoSustentabilidade').getContext('2d');

const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Preservação da Água', 'Saúde do Solo', 'Redução de Poluição'],
        datasets: [{
            label: 'Ganho em % com Agricultura Sustentável',
            data: [80, 90, 70],
            backgroundColor: [
                '#1e88e5', // Azul para água
                '#8d6e63', // Marrom para solo
                '#43a047'  // Verde para poluição reduzida
            ],
            borderColor: ['#0d47a1', '#5d4037', '#1b5e20'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: { size: 16 } // Letras grandes no gráfico
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { font: { size: 14 } }
            },
            x: {
                ticks: { font: { size: 14 } }
            }
        }
    }
});

// 2. SISTEMA DA CAIXA DE PERGUNTAS E RESPOSTAS (FAQ)
function toggleFaq(botao) {
    // Descobre se a pergunta já estava aberta
    const expandido = botao.getAttribute('aria-expanded') === 'true';
    
    // Inverte o estado da pergunta para o leitor de tela
    botao.setAttribute('aria-expanded', !expandido);
    
    // Pega a div da resposta que vem logo após o botão
    const resposta = botao.nextElementSibling;
    
    if (!expandido) {
        resposta.style.display = 'block';
        resposta.setAttribute('aria-hidden', 'false');
    } else {
        resposta.style.display = 'none';
        resposta.setAttribute('aria-hidden', 'true');
    }
}
