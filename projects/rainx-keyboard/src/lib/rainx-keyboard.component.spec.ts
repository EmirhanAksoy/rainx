import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainxKeyboardComponent } from './rainx-keyboard.component';

describe('RainxKeyboardComponent', () => {
  let component: RainxKeyboardComponent;
  let fixture: ComponentFixture<RainxKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainxKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainxKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
