import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListaContratadosComponent } from './components/contratante/lista-contratados/lista-contratados.component';
import { CadastrarComponent } from './components/contratado/cadastrar/cadastrar.component';
import { LoginContratanteComponent } from './components/contratante/login-contratante/login-contratante.component';
import { TabpreenchimentoComponent } from './components/contratado/tabpreenchimento/tabpreenchimento.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaContratadosComponent,
    CadastrarComponent,
    LoginContratanteComponent,
    TabpreenchimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
