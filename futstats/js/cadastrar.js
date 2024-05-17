const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Pegar os valores dos inputs
    if (form.nome.value === "" ||
        form.time.value === "" ||
        form.gols.value === "" ||
        form.assistencias.value === "" ||
        form.foto.value === ""){
            alert("Formulário inválido!! Tente novamente!!");
            return;
        }

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: form.nome.value,
        time: form.time.value,
        gols: form.gols.value,
        assistencias: form.assistencias.value,
        foto: form.foto.value
    }

    // Obtendo jogadores já criados para não sobescrever
    var jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador);

    // Salvar o objeto no localStorage usando a chave "jogadores"
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Redirecionar o usuário para a página inicial
    window.location = "index.html"
})