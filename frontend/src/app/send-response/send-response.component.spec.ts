import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendResponseComponent } from './send-response.component';

describe('SendResponseComponent', () => {
  let component: SendResponseComponent;
  let fixture: ComponentFixture<SendResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
