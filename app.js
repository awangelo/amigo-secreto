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

function sortearAmigo() {
    // Nao sortear se tiver menos de 2 amigos
    if (nomeAmigos.length < 2) {
        return;
    }

    let sorteadoIndex = Math.floor(Math.random() * nomeAmigos.length);
    let sorteado = nomeAmigos[sorteadoIndex];
    nomeAmigos.splice(sorteadoIndex, 1); // Remove o amigo sorteado da lista
    nroSorteios++;

    let resultadoElement = document.getElementById("resultado");
    let sorteadoItem = document.createElement("li");
    sorteadoItem.classList.add("sorteado");
    sorteadoItem.textContent = `${nroSorteios}: ${sorteado}`;
    resultadoElement.append(sorteadoItem);

    // Remover o amigo sorteado
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = nomeAmigos.join("<br>");
}

function reiniciar() {
    nomeAmigos = [];
    nroSorteios = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
