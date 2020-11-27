import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTimelineChartComponent } from './dashboard-timeline-chart.component';

describe('DashboardTimelineChartComponent', () => {
  let component: DashboardTimelineChartComponent;
  let fixture: ComponentFixture<DashboardTimelineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTimelineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTimelineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
