import { Routes } from '@angular/router';
import { CardsComponent } from './OrderPlace/cards/cards.component';
import { SummaryComponent } from './OrderPlace/summary/summary.component';
import { CardandSummaryComponent } from './OrderPlace/cardand-summary/cardand-summary.component';

export const routes: Routes = [
    {path:'OrderPlace', component:CardandSummaryComponent}
    
];
