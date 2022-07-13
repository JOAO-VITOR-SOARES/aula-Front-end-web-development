const REPOS = document.querySelector("#repositorios");

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
        return response.forEach(displayResults)
    });

}


const teste = git();

    function displayResults(repositorios){
    let REPOS2 = document.createElement("div");
    REPOS2.innerHTML = repositorios.name;
    REPOS.appendChild(REPOS2)
}
