function apagar(id){
    var confirmation = confirm("Tem certeza?");

    if (!confirmation){
        return;
    }

    console.log(id);

    var updtJogadores = jogadores.filter((jogador, i) => {
        console.log(jogador.id)
        if (jogador.id == id) {
            console.log("ACHOUUUUU")
            document.getElementsByClassName("data")[i].remove();
            return null;
        }
        else {
            return jogador;
        }
    });

    localStorage.setItem("jogadores", JSON.stringify(updtJogadores));
}