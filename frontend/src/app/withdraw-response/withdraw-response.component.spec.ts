import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawResponseComponent } from './withdraw-response.component';

describe('WithdrawResponseComponent', () => {
  let component: WithdrawResponseComponent;
  let fixture: ComponentFixture<WithdrawResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
