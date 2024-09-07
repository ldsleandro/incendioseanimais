function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Verifica se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi digitado no campo busca. Digite sua pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nomePopular = "";
    let nomeCientifico = "";
    let caracteristicas = "";
    let causasAmeaca = "";
    let regiao = "";
    let tags = "";

    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
        nomePopular = dado.nomePopular.toLowerCase();
        nomeCientifico = dado.nomeCientifico.toLowerCase();
        caracteristicas = dado.caracteristicas.toLowerCase();
        causasAmeaca = dado.causasAmeaca.toLowerCase();
        regiao = dado.regiao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (nomePopular.includes(campoPesquisa) || nomeCientifico.includes(campoPesquisa) || caracteristicas.includes(campoPesquisa) || causasAmeaca.includes(campoPesquisa) || regiao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
           
            // Constrói o HTML para cada resultado da pesquisa
            resultados += `
 <div class="item-resultado">
   <h2>
     <a href="#" target="_blank">${dado.nomePopular}</a>
   </h2>
   <p><b>Nome científico:</b> <i>${dado.nomeCientifico}</i></p>
   <p><b>Características:</b> ${dado.caracteristicas}</p> 
   <p><b>Região:</b> ${dado.regiao}</p> 
   <p><b>Causas da ameaça:</b> ${dado.causasAmeaca}</p> 
   <a href=${dado.linkWikipedia} target="_blank"><b>Mais informações.</b></a>
 </div>
`;


        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;

}