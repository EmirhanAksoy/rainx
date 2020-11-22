import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainxKeyboardButtonComponent } from './rainx-keyboard-button.component';

describe('RainxKeyboardButtonComponent', () => {
  let component: RainxKeyboardButtonComponent;
  let fixture: ComponentFixture<RainxKeyboardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainxKeyboardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainxKeyboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
