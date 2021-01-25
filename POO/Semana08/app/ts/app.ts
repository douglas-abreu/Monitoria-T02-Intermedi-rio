import { Pessoa } from './pessoa'

let novaPessoa1 = new Pessoa("Douglas", "Oliveira");
let novaPessoa2 = new Pessoa("Douglas", "Oliveira", 24);

console.log(novaPessoa1.imprimirInformacoes());
console.log(novaPessoa2.imprimirInformacoes());