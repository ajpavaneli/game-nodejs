export default function carregarTela(jogo, context, requestAnimationFrame ) {

    context.clearRect(0, 0, 10, 10)

    for (const jogadorId in jogo.state.jogadores) {
        const jogador = jogo.state.jogadores[jogadorId]
        const color = 'black'
        context.fillStyle = color
        context.fillRect(jogador.x, jogador.y, 1, 1)

    }

    for (const pedraId in jogo.state.pedras) {
        const pedra = jogo.state.pedras[pedraId]
        const color = 'red'
        context.fillStyle = color
        context.fillRect(pedra.x, pedra.y, 1, 1)

    }

    requestAnimationFrame(() => {
        carregarTela(jogo, context, requestAnimationFrame)
    })

}