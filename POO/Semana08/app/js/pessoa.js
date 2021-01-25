"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        if (idade != undefined) {
            this.idade = idade;
        }
        else
            this.idade = -1;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getSobrenome = function () {
        return this.sobrenome;
    };
    Pessoa.prototype.setSobrenome = function (sobrenome) {
        this.sobrenome = sobrenome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.imprimirInformacoes = function () {
        console.log("\nNome: " + this.nome + " \nSobrenome: " + this.sobrenome + " \nIdade: " + this.idade);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
