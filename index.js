
/*
O comando fetch executa um request no servidor destino
deve ser informado o method e headers.
*/

function getAll(){
    const url = 'http://localhost:8080/cliente'
    fetch(url, {
        method: 'GET',
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })
    .then(response => response.text()) // se a conexao com a API ocorrer bem, recebe e le a resposta do site

    .then(data => { // se a resposta for entendida, exibe uma mensagem com os dados recebidos
        alert('Resposta: '+ data);
    })
    .catch(error => { // caso ocorrer um erro, exiba o erro
        console.error('Erro', error);
    })
}


document.getElementById('loginForm').addEventListener('submit', function(event){

    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const url = 'http://localhost:8080/cliente/validaSenha?email=' + encodeURIComponent(email) + '&senha=' + encodeURIComponent(senha)

    fetch(url, {
        method: 'GET',
        headers: {
            'Origin': 'http://localhost:3000'
        }
    })

    .then(response => {
        if(!response.ok){
            alert("Algo deu errado");
        }else{
            alert("Sucesso");
        }
     })
     .then(data => {
        
    })
    .catch(error => console.error('Erro:', error))
});

