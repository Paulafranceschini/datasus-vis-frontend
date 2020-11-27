import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidMenPieChartComponent } from './cid-men-pie-chart.component';

describe('CidMenPieChartComponent', () => {
  let component: CidMenPieChartComponent;
  let fixture: ComponentFixture<CidMenPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidMenPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidMenPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
