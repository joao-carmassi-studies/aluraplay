import { conectaApi } from "./conectaApi.js";

async function bucarVideos(evento) {
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.bucarVideo(dadosDePesquisa);

    console.log(busca)
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', evento => bucarVideos(evento))