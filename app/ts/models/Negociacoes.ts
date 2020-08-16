class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    paraArray(): Negociacao[] {
        return [].concat(this.negociacoes);
    }
}