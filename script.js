let disciplinaAtual = "Matemática";

const temasPorDisciplina = {
  "Matemática": ["Álgebra", "Geometria", "Funções"],
  "Física": ["Cinemática", "Dinâmica", "Ondulatória"],
  "Química": ["Tabelas periódicas", "Ligações químicas", "Reações químicas"]
}; 

const descricaoTemas = {
  "Fração": "Uma fração representa uma parte de um todo ou uma divisão de quantidades, expressa como dois números separados por uma barra",
  "log": "O cálculo de logaritmos envolve encontrar o expoente ao qual uma base deve ser elevada para obter um determinado número",
  "Funções": "Funções representam relações entre duas variáveis, onde cada entrada possui uma única saída.",
  "campo eletrico": "O campo elétrico é uma região do espaço onde uma carga elétrica sofre a ação de uma força elétrica",
  "Dinâmica": "A dinâmica estuda as causas do movimento com base nas leis de Newton.",
  "Ondulatória": "A ondulatória analisa os fenômenos das ondas, como som, luz e vibrações.",
 "ligação covalente":"é um tipo de ligação química em que dois átomos compartilham um ou mais pares de elétrons para atingir a estabilidade, geralmente ocorrendo entre não metais e o hidrogênio",
  "Ligações químicas": "As ligações químicas explicam como os átomos se combinam para formar substâncias.",
  "Reações químicas": "As reações químicas envolvem a transformação de substâncias em novas substâncias."
};

function mudarDisciplina(nome) {
  disciplinaAtual = nome;
  document.getElementById("disciplina").innerText = nome;
  document.getElementById("conteudo").innerHTML = `<p>Bem-vindo ao conteúdo de ${nome}.</p>`;
  mostrarTemas(nome);
}

function mostrarTemas(disciplina) {
  const temasDiv = document.getElementById("temas");
  const temas = temasPorDisciplina[disciplina];
  temasDiv.innerHTML = temas.map(tema => `<button class="tema-btn" onclick="mostrarTema('${tema}')">${tema}</button>`).join("");
}

function mostrarTema(tema) {
  document.getElementById("conteudo").innerHTML = `<h3>${tema}</h3><p>${descricaoTemas[tema]}</p>`;
}

function mostrarConteudo(tipo) {
  document.getElementById("conteudo").innerHTML = `<p>${tipo.charAt(0).toUpperCase() + tipo.slice(1)} de ${disciplinaAtual}.</p>`;
}

function toggleMenu() {
  const menu = document.getElementById("menuDisciplinas");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function pesquisarConteudo(termo) {
  const conteudo = document.getElementById("conteudo");
  if (termo.trim() === "") {
    conteudo.innerHTML = `<p>Bem-vindo ao conteúdo de ${disciplinaAtual}.</p>`;
  } else {
    conteudo.innerHTML = `<p>Resultados da pesquisa por: <strong>${termo}</strong></p>`;
  }
}

window.onload = () => mostrarTemas("Matemática");