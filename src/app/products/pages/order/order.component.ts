import {Component} from '@angular/core';
import {Color, Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  protected isUpperCase: boolean = false;
  protected sortByHero?: keyof Hero;
  protected heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    }, {
      name: 'Batman',
      canFly: false,
      color: Color.black
    }, {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    }, {
      name: 'Robin',
      canFly: false,
      color: Color.green
    }, {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },
  ];

  toggleUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.sortByHero = value;
  }
}
