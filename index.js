import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11111111111;

const cliente2 = new Cliente();
cliente2.nome = "Olegario";
cliente2.cpf = 11111111111;

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.agencia = 1001;

contaCorrenteGabriel.depositar(100);
const valorSacado = contaCorrenteGabriel.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteGabriel);
