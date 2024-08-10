API_KEY = "sk-svcacct-REIsG31SgljOfbVqtiZPrsq-H_DVb46M119RSnDcb78PTrLRkT3BlbkFJIMUZT8M0tbmoePmQahd7jVpz7Suy_f5VHsKEzu-Ao3T6lgcAA"


document.addEventListener('DOMContentLoaded', function() {
    // Evento para adicionar o textarea quando o ícone do lápis for clicado
    document.getElementById('pencil_icon').addEventListener('click', function() {
        document.getElementById('Container_drop').innerHTML = `
            <div class="container_textarea">
                <textarea id="text-input" placeholder="Escreva aqui o conteúdo que deseja gerar o teste"></textarea>
            </div>
        `;
    });

    // Evento para capturar o clique no botão GERAR
    document.getElementById('generate').addEventListener('click', function(event) {
        event.preventDefault();  // Evita que o formulário seja enviado e a página recarregada

        const userInput = document.getElementById('text-input')?.value; // Captura o conteúdo do textarea
        if (!userInput) {
            alert('Por favor, insira algum texto para gerar o teste.');
            return;
        }

        // Faz a requisição para a API com o conteúdo do textarea
        fetch('https://sua-api-endpoint.com/gerar-teste', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}` // Substitua pelo seu token de API
            },
            body: JSON.stringify({ prompt: userInput }) // Envia o texto inserido
        })
        .then(response => response.json())
        .then(data => {
            // Exibe o resultado no contêiner
            document.getElementById('response').innerHTML = `
                <div class="api-response">
                    <h3>Resultado Gerado:</h3>
                    <p>${data.resultado}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('response').innerHTML = `
                <div class="api-response">
                    <p>Ocorreu um erro ao gerar o teste. Tente novamente.</p>
                </div>
            `;
        });
    });
});
