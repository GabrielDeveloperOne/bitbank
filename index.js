import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11111111111;

//const cliente2 = new Cliente();
//cliente2.nome = "Olegario";
//cliente2.cpf = 11111111111;

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.agencia = 1001;
contaCorrenteGabriel.cliente = cliente1;
contaCorrenteGabriel.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = 0;
conta2.agencia = 1002;

contaCorrenteGabriel.transferir(200, conta2)

console.log(contaCorrenteGabriel);
console.log(conta2);

