export default function createEventListerner(jogadorAtivo) {
    const state = {
        observers : []

    }

    function escreverObservers(observerFunction) {
        state.observers.push(observerFunction)
    }

    function noticarObservers(comando) {
        for (const observerFunction of state.observers) {
            observerFunction(comando)
        }

    }
    document.addEventListener('keydown', teclaPressionada)
    function teclaPressionada(event) {               
        const comando = {
            jogadorId: jogadorAtivo,
            teclaPressionada: event.key
        }

        noticarObservers(comando)

    }

    return {
        escreverObservers
    }

    
  


}