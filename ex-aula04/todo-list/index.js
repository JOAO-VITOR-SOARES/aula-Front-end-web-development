const buttonElement = document.querySelector(".button")
const prvlElement = document.querySelector(".prvl")
const trashElement = document.querySelector(".trash")
const conteudo_listlement = document.querySelector(".conteudo_list")
const pesquisaElement = document.querySelector(".pesquisa")

buttonElement.onclick = async () => {

    //CriandoTask

    let REPOS3 = await apiCreatTask(pesquisaElement.value, false);
    let REPOS2 = document.createElement("label");
    prvlElement.innerHTML = pesquisaElement.value;
    prvlElement.appendChild(REPOS2);

    //checkbox
    // let checkbox = createElement("input");
    // input.setAttribute("type", "checkbox");

}
async function apiCreatTask(description, complete){
    const newTask = {description, complete}
    const url = 'http://localhost:3000/tasks'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url,options)
    // console.log(await response.json())
}

async function apiGetTask(){
    const url = 'http://localhost:3000/tasks'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch(url,options)
    console.log(await response.json())
}

apiGetTask();

// async function apiDeleteTask(id)
// {
//     const url = `http://localhost:3000/tasks/${id}`
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     const response = await fetch(url,options)
//     if(response.status == 204){
//         console.log('ok')
//     }
//     if(response.status == 404){
//         console.log('F')
//     }
// }
// apiDeleteTask()

async function apiUpdateTask(id, complete){
    const url = `http://localhost:3000/tasks/${id}`
    const newTask = {complete}
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url,options)

    if(response.status == 204){
        console.log('ok')
    }
    if(response.status == 404){
        console.log('F')
    }
}

apiUpdateTask(5,true)