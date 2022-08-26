import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeprojeto: string = ' *** Projeto PDI *** ';
  anuncio: string = ' Uma plataforma de Recursos Humanos Interativa ';
  image_0: string = 'assets/Image Sample 0.png';
  image_1: string = 'assets/Image Sample 1.jpg';
  image_2: string = 'assets/Image Sample 2.jpg';
  image_3: string = 'assets/Image Sample 3.jpg';
  image_4: string = 'assets/Image Sample 4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
