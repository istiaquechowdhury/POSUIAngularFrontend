import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  orderItems = Array.from({ length: 12 }, () => ({
    name: 'Pasta',
    option1: 'Extra Spicy',
    option2: 'Extra Cheese',
    quantity: 2,
    price: 4.66
  }));
  
}
