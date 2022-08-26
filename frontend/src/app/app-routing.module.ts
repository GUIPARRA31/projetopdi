import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './components/contratado/cadastrar/cadastrar.component';
import { TabpreenchimentoComponent } from './components/contratado/tabpreenchimento/tabpreenchimento.component';
import { ListaContratadosComponent } from './components/contratante/lista-contratados/lista-contratados.component';
import { LoginContratanteComponent } from './components/contratante/login-contratante/login-contratante.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Contratado/Cadastrar',component:CadastrarComponent},
  {path:'Contratado/Tabpreenchimento',component:TabpreenchimentoComponent},
  {path:'Contratante/Lista de Contratados',component:ListaContratadosComponent},
  {path:'Contratante/Login-Contratante',component:LoginContratanteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
