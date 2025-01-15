let nomeAmigos = [];
let nroSorteios = 0;

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value;

    // Nao adicionar um nome vazio
    if (nome === "") {
        return;
    }

    nomeAmigos.push(nome);
    inputNome.value = ""; // Limpa o input
    document.getElementById("listaAmigos").innerHTML += nome + "<br>";
}