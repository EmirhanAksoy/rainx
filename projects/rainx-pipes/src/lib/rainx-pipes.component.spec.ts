import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainxPipesComponent } from './rainx-pipes.component';

describe('RainxPipesComponent', () => {
  let component: RainxPipesComponent;
  let fixture: ComponentFixture<RainxPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainxPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainxPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
