import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainxListboxComponent } from './rainx-listbox.component';

describe('RainxListboxComponent', () => {
  let component: RainxListboxComponent;
  let fixture: ComponentFixture<RainxListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainxListboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainxListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
