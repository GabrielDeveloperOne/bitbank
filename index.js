class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor){
            this.saldo -= valor;
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
contaCorrenteGabriel.saldo = 0;
contaCorrenteGabriel.agencia = 1001;

console.log(contaCorrenteGabriel.saldo);
contaCorrenteGabriel.saldo = 100;
console.log(contaCorrenteGabriel.saldo);
contaCorrenteGabriel.sacar(500);
console.log(contaCorrenteGabriel.saldo);

console.log(contaCorrenteGabriel);
console.log(cliente1);
console.log(cliente2);