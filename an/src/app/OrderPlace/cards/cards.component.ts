import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  foodNames = [
    'Pasta',
    'Pizza',
    'Burger',
    'Kacchi Biriyani',
    'Sandwich',
    'Noodles',
    'Momos',
    'Salad',
    'Soup',
    'Fries',
    'Chicken Wings',
    'Ice Cream',
    'Donut',
    'Cake',
    'Coffee'
  ];

  Price = [
    '200',
    '500',
    '600',
    '300',
    '400',
    '700',
    '100',
    '400',
    '700',
    '100',
    '700',
    '100',
    '400',
    '700',
    '100',

  ];


  
  menuItems = Array.from({ length: 15 }, (_, index) => ({
    name: this.foodNames[index],
    price: this.Price[index]
  }));
  
 
  
}
