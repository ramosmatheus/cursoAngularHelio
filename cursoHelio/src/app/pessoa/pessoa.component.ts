import { Component, OnInit } from '@angular/core';
import { ServicoPessoa } from '../servicos/servico.pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private servico: ServicoPessoa) { 
    
  }

  ngOnInit() {
  }

  adicionar(){
     this.servico.adicionar()
    
  }
  excluir(i: number): void{
    this.servico.excluir(i);
  }
  alterar(i: number): void{
    this.servico.alterar(i);
  }

}
