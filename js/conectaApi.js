async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideos(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizacoes`,
            url: url,
            imagem: imagem
        })
    });
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function bucarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideos,
    bucarVideo
}