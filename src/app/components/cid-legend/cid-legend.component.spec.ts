import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCidLegendComponent } from './cid-legend.component';

describe('AppCidLegendComponent', () => {
  let component: AppCidLegendComponent;
  let fixture: ComponentFixture<AppCidLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCidLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCidLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
