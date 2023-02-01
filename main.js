//Classe Principal//
class Calçado {

    constructor(marca, modelo, cor, tamanho) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.tamanho = tamanho
    }
}

//Classe Herdeira 1//
class Tenis extends Calçado {
    tipo = "Tenis"
}

//Classe Herdeira 2//
class Mocassim extends Calçado {
    tipo = "mocassim"
}


//Instâncias//
const teniscorrida = new Tenis('adidas', 'lite', 'cinza', '40');
const teniscorrida1 = new Tenis('nike', 'running', 'preto', '40');
const mocassim = new Mocassim('lacoste', 'slim', 'branco', '40');

console.log(teniscorrida)
console.log(teniscorrida1)
console.log(mocassim)
