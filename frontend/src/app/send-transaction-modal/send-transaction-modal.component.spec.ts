import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTransactionModalComponent } from './send-transaction-modal.component';

describe('SendTransactionModal', () => {
  let component: SendTransactionModalComponent;
  let fixture: ComponentFixture<SendTransactionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SendTransactionModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendTransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
