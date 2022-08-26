import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contratados',
  templateUrl: './lista-contratados.component.html',
  styleUrls: ['./lista-contratados.component.css']
})
export class ListaContratadosComponent implements OnInit {

  listaCandidatos: any[] = [
    {num:"1", candidato: 'Manda Chuva', email: 'topcat@gmail.com', endereco: 'Lata do lixo no final do beco', curriculo: '########'},
    {num:"2", candidato: 'Florisbela', email: 'florbela@gmail.com', endereco: 'Casa do Pateta', curriculo: 'Qualquer coisa'},
    {num:"3", candidato: 'Bruce Wayne', email: 'batmail@gmail.com', endereco: 'Mansão Wayne', curriculo: '$$$$$$$$'},
    {num:"4", candidato: 'Mussun', email: 'emeiss@gmail.com', endereco: 'Céu', curriculo: '!!!!!!!!!!!'},
    {num:"5", candidato: 'Ben 10', email: 'procurasealiens@gmail.com', endereco: 'TV Globinho', curriculo: '¹³¹³¹³¹³¹³'},
    {num:"6", candidato: 'Patolino', email: 'patolindo@hotmail.com', endereco: 'Asilo Cartoon', curriculo: '%%%%%%%%%%'},

  ];

  constructor() {}

  ngOnInit(): void {
  }

}
