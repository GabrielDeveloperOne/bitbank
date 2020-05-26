import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Gabriel", 123456789);

const cliente2 = new Cliente("Olegario", 123498765);
console.log(cliente2.cpf);

const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);
contaCorrenteGabriel.depositar(500);
console.log(contaCorrenteGabriel);

const conta2 = new ContaCorrente(cliente1, 102);

let valor = 200;
contaCorrenteGabriel.transferir(valor, conta2)

console.log(ContaCorrente.numeroDeContas);




