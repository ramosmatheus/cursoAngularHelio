


export class Pessoa{
    private nome : string;
    private cpf : number;
    private email : string;

    getNome():string{
        return this.nome;
    }
    setNome(nome:string){
        this.nome = nome;
    }
    getCpf():number{
        return this.cpf;
    }
    setCpf(cpf:number){
        this.cpf = cpf;
    }
    getEmail():string{
        return this.email;
    }
    setEmail(email:string){
        this.email = email;
    }



}