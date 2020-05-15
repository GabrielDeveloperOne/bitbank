class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente;
const cliente2 = new Cliente;

cliente1.nome = "Gabriel";
cliente1.cpf = 11111111111;
cliente1.agencia = 1001;
cliente1.saldo = 3000;

cliente2.nome = "Maria";
cliente2.cpf = 11111111111;
cliente2.agencia = 1001;
cliente2.saldo = 5000;

console.log(cliente1, cliente2)