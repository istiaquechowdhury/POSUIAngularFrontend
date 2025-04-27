import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardandSummaryComponent } from './cardand-summary.component';

describe('CardandSummaryComponent', () => {
  let component: CardandSummaryComponent;
  let fixture: ComponentFixture<CardandSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardandSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardandSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
