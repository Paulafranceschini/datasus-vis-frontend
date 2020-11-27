import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidBarChartPageComponent } from './cid-bar-chart-page.component';

describe('CidBarChartComponent', () => {
  let component: CidBarChartPageComponent;
  let fixture: ComponentFixture<CidBarChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidBarChartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidBarChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
