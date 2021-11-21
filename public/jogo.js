export default function novoJogo() {
    const state = {
        jogadores: {},
        pedras: {},
        tela: {
            width: 10,
            height: 10
        }
    }


    function novoJogador(jogadorId, x, y) {
        state.jogadores[jogadorId] = {
            jogadorId: jogadorId,
            x: x,
            y: y
        }

    }

    function removerJogador(jogadorId) {
        delete state.jogadores[jogadorId]
    }


    const movimentosAceitos = {
        ArrowUp(jogador) {
            if (jogador.y > 0) 
            jogador.y = jogador.y - 1;
        } ,
        ArrowLeft(jogador) {
            if (jogador.x > 0) 
            jogador.x = jogador.x - 1;
        } ,
        ArrowRight(jogador) {
            if (jogador.x < state.tela.width - 1) 
            jogador.x = jogador.x + 1;
        } ,
        ArrowDown(jogador) {
            if (jogador.y < state.tela.height - 1  ) 
            jogador.y = jogador.y + 1;
        } 
    }

    function moverJogador(command) {
        const jogador = state.jogadores[command.jogadorId]
        const teclaPressionada = command.teclaPressionada 
        const movimentos = movimentosAceitos[teclaPressionada];
        if (movimentos && jogador) {
            movimentos(jogador)
            colisao(jogador)
        }
        
      
    }

    

    function novaPedra(pedraId, x, y) {
        state.pedras[pedraId] = {
            pedraId: pedraId,
            x: x,
            y: y
        }
    }

    function removerPedra(pedraId) {
        delete state.pedras[pedraId]
    }

    function colisao(jogador){
        for (const pedraId in state.pedras) {
            const pedra = state.pedras[pedraId]

            if (pedra.x === jogador.x && pedra.y === jogador.y) {
                console.log('colidiu com a pedra ' + pedra.pedraId)
                removerPedra(pedraId)

            }
        }

    }


    return {
        state,
        novoJogador,
        novaPedra,
        removerJogador,
        removerPedra,
        moverJogador
    }
}
