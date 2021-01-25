export class Pessoa{
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade?: number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        if(idade != undefined){
            this.idade = idade;
        }else
            this.idade = -1;
    }

    public getNome() : string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }
    
    public getSobrenome(): string {
        return this.sobrenome;
    }
    
    public setSobrenome(sobrenome: string): void{
        this.sobrenome = sobrenome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public imprimirInformacoes(){
        console.log(`\nNome: ${this.nome} \nSobrenome: ${this.sobrenome} \nIdade: ${this.idade}`);
    }

}


