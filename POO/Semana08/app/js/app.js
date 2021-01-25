"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = require("./pessoa");
var novaPessoa1 = new pessoa_1.Pessoa("Douglas", "Oliveira");
var novaPessoa2 = new pessoa_1.Pessoa("Douglas", "Oliveira", 24);
console.log(novaPessoa1.imprimirInformacoes());
console.log(novaPessoa2.imprimirInformacoes());
