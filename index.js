class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo = 0 atributo privado
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}



const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11111111111;

const cliente2 = new Cliente();
cliente2.nome = "Olegario";
cliente2.cpf = 11111111111;

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.agencia = 1001;

contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.sacar(50);

console.log(contaCorrenteGabriel);
