import { Component } from '@angular/core';
import { Product} from "./product.model";

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
  names: string[] = ['Fran', 'Juli', 'Ana'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/bike.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/bike.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  incAge(){
    this.person.age++
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index:number){
    this.names.splice(index, 1  )
    this.newName = ''
  }
}
