import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainxUploadComponent } from './rainx-upload.component';

describe('RainxUploadComponent', () => {
  let component: RainxUploadComponent;
  let fixture: ComponentFixture<RainxUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RainxUploadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RainxUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
