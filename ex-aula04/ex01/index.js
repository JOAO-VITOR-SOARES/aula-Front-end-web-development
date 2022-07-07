fetch(`https://api.github.com/users/JOAO-VITOR-SOARES/repos`)

    .then(response => {
        resposta(response)
        return response.json();
    })
    .catch(err => {})
    .then(resposta => {resposta(response)})
    
function resposta(response) { console.log(response) }
