import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-tabpreenchimento',
  templateUrl: './tabpreenchimento.component.html',
  styleUrls: ['./tabpreenchimento.component.css']
})
export class TabpreenchimentoComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  eMail: string = '';
  inputCity: string ='';
  inputState: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  salvarInfo(): void{

    console.log('firstName',this.firstName);
    console.log('lastName',this.lastName);
    console.log('eMail',this.eMail);
    console.log('inputCity',this.inputCity);
    console.log('inputState',this.inputState);
    alert('Salvo com Sucesso');


  }

}
