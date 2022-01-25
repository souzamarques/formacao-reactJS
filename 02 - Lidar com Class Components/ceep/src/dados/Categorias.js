export default class Categorias {
    constructor() {
        this.categorias = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.categorias);
        })
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
    }
}
