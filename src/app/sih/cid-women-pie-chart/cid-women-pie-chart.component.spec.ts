import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidWomenPieChartComponent } from './cid-women-pie-chart.component';

describe('CidWomenPieChartComponent', () => {
  let component: CidWomenPieChartComponent;
  let fixture: ComponentFixture<CidWomenPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidWomenPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidWomenPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
