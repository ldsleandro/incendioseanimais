function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos e verifica se foi encontrada
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio e exibe uma mensagem caso esteja
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi digitado no campo busca. Digite sua pesquisa.</p>";
        return; // Interrompe a função se o campo estiver vazio
    }

    // Inicializa variáveis para armazenar os resultados da pesquisa e os dados de cada elemento
    let resultados = "";
    let nomePopular = "";
    let nomeCientifico = "";
    let caracteristicas = "";
    let causasAmeaca = "";
    let regiao = "";
    let tags = "";

    // Itera sobre cada elemento do array 'dados' (não mostrado no código)
    for (let dado of dados) {
        // Converte todos os campos do objeto 'dado' para minúsculas para facilitar a comparação
        nomePopular = dado.nomePopular.toLowerCase();
        nomeCientifico = dado.nomeCientifico.toLowerCase();
        caracteristicas = dado.caracteristicas.toLowerCase();
        causasAmeaca = dado.causasAmeaca.toLowerCase();
        regiao = dado.regiao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em algum dos campos do objeto
        if (
            nomePopular.includes(campoPesquisa) ||
            nomeCientifico.includes(campoPesquisa) ||
            caracteristicas.includes(campoPesquisa) ||
            causasAmeaca.includes(campoPesquisa) ||
            regiao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)
        ) {
            // Constrói o HTML para cada resultado da pesquisa
            resultados += `
    <div class="item-resultado">
    <h2>
    <a href="#" target="_blank">${dado.nomePopular}</a>
    </h2>
    <p><b>Nome científico:</b> <i>${dado.nomeCientifico}</i></p>
    <p><b>Características:</b> ${dado.caracteristicas}</p> 
    <p><b>Região:</b> ${dado.regiao}</p> 
    <p><b>Outras causas de ameaça:</b> ${dado.causasAmeaca}</p> 
    <a href=${dado.linkWikipedia} target="_blank"><b>Mais informações.</b></a>
    </div>
    `;
        }
    }

    // Verifica se algum resultado foi encontrado e exibe uma mensagem caso contrário
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    // Insere os resultados da pesquisa na seção HTML
    section.innerHTML = resultados;
}