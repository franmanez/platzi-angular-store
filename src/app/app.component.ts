import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-store';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 10,
    img: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  incAge(){
    this.person.age++
  }
}
