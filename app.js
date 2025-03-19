let amigos = [];
        
function agregarAmigo() {
    let info = document.getElementById("amigo");
    let nombre = info.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        info.value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
                return;
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("nombre-item");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let ganador = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = `<li class="ganador">El amigo secreto sorteado es: <strong>${ganador}</strong></li>`;
        document.getElementById("listaAmigos").style.display = "none";
    } else {
        document.getElementById("resultado").innerHTML = `<li class="error">Añade nombres antes de sortear.</li>`;
    }
}