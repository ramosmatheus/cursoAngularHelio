import { Pessoa } from '../entidade/pessoa';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoPessoa{
    
listaPessoa = new Array<Pessoa>();

  pessoa: Pessoa = new Pessoa();

  constructor() { }

  ngOnInit() {
  }

  adicionar(){
      this.listaPessoa.push(this.pessoa);
      this.pessoa = new Pessoa;
    
  }
  excluir(i: number): void{
    this.listaPessoa.splice(i,1);
  }
  alterar(i: number): void{
    this.pessoa = this.listaPessoa[i];
    this.listaPessoa.splice(i,1);
  }
}