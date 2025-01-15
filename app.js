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

    let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
    nroSorteios++;

    let resultadoElement = document.getElementById("resultado");
    let sorteadoItem = document.createElement("li");
    sorteadoItem.classList.add("sorteado");
    sorteadoItem.textContent = `Sorteio ${nroSorteios}: ${sorteado}`;
    resultadoElement.append(sorteadoItem);
    
    nomeAmigos = []; // Nao permitir mais sorteios com nomes repetidos

    setTimeout(() => {
        document.getElementById("listaAmigos").innerHTML = "";
    }, 800);
}

function reiniciar() {
    nomeAmigos = [];
    nroSorteios = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}