import { conectaApi } from "./conectaApi.js";

let listaApi;

const lista = document.querySelector('[data-lista]');

function constroicard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.classList.add('videos__item')
    video.innerHTML = `
    <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li>
        `
        return video;
}

async function listaVideo() {
    listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroicard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}
listaVideo();

async function bucarVideos(evento) {
    const dadosDePesquisa = document.querySelector('.pesquisar__input').value;

    lista.innerHTML = ''
    
    listaApi.forEach(element => {
        const nomeDoVideos = element.titulo.toLowerCase()
        if(nomeDoVideos.includes(dadosDePesquisa)) {
            console.log(element.titulo)
            lista.appendChild(constroicard(element.titulo, element.descricao, element.url, element.imagem))
        }
    });
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', evento => bucarVideos(evento))