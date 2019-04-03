import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyResponseModalComponent } from './buy-response-modal.component';

describe('BuyResponseModalComponent', () => {
  let component: BuyResponseModalComponent;
  let fixture: ComponentFixture<BuyResponseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
