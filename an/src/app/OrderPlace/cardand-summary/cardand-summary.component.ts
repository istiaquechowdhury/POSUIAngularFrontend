import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-cardand-summary',
  standalone: true,
  imports: [CardsComponent,SummaryComponent],
  templateUrl: './cardand-summary.component.html',
  styleUrl: './cardand-summary.component.scss'
})
export class CardandSummaryComponent {

}
