import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { Erro404Component } from './erro404/erro404.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormsModule } from '@angular/forms';
import { ServicoPessoa } from './servicos/servico.pessoa';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    SobreComponent,
    Erro404Component,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [ServicoPessoa],
  bootstrap: [AppComponent]
})
export class AppModule { }
