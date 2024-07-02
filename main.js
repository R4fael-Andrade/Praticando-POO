function Veiculo(modelo, fabricante, cor, valorVenda) {
    this.modelo = modelo;
    this.fabricante = fabricante; 
    this.cor = cor;
    let _valorVenda = valorVenda;

    //Criando metodo GET
    this.getValorVenda = function () {
        return _valorVenda;
    }
    //Criando metodo SET
    this.setValorVenda = function (valor) {
        if(typeof valor === 'number') {
                _valorVenda = valor;
        }
    }
    //Criando método para dar desconto no valor final do veículo
    this.darDesconto = function() {
        _valorVenda = _valorVenda - (_valorVenda * 0.1);
        this.setValorVenda(_valorVenda);
    }
}


function Carro(modelo, fabricante, cor, valorVenda) {
    Veiculo.call(this, modelo, fabricante, cor, valorVenda);
    //Criando o polimorfismo do método para a classe Carro 
    this.darDesconto = function() {
        let valorFinal = this.getValorVenda() - (this.getValorVenda() * 0.07);
        this.setValorVenda(valorFinal);
    }
}

function Moto(modelo, fabricante, cor, valorVenda) {
    Veiculo.call(this, modelo, fabricante, cor, valorVenda);
    //Criando o polimorfismo do método para a classe Moto
    this.darDesconto = function() {
        let valorFinal = this.getValorVenda() - (this.getValorVenda() * 0.04);
        this.setValorVenda(valorFinal);
    }
}

//Criando uma nova instância de Carro
const carro = new Carro('Fiat Uno', 'Fiat', 'Azul', 18000);
carro.setValorVenda(20000);
carro.darDesconto();
console.log(carro.getValorVenda());

//Criando uma nova instância de Moto
const moto1 = new Moto('Fazer 250', 'Fazer', 'Preta', 14000);
moto1.setValorVenda(16000);
moto1.darDesconto();
console.log(moto1.getValorVenda());

//Criando uma nova instância de Moto
const moto2 = new Moto ('CB 300', 'Honda', 'Vermelho', 14000);
moto2.setValorVenda(15000);
moto2.darDesconto();
console.log(moto2.getValorVenda());