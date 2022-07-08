let REPOS = document.querySelector("#repositorios");

function git() {
    fetch(`https://api.github.com/users/JOAO-VITOR-SOARES/repos`)

    .then(response => {
        if (!response.ok) {
            throw new Error(`http error: status ${response.status}`)
        }
        return response.json();
    })
    .catch(error => {
        alert(error.message)
    })
    .then(response => {
        console.log(response.list)
        displayResults(response)
    });

}
const teste2 = git();

array.forEach(repositorios => {
    
});
    function displayResults(repositorios){
    console.log(repositorios[0])
    REPOS.innerText = JSON.stringify(repositorios[0].name);
}

