import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEditingComponent } from './transaction-editing.component';

describe('TransactionEditingComponent', () => {
  let component: TransactionEditingComponent;
  let fixture: ComponentFixture<TransactionEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
