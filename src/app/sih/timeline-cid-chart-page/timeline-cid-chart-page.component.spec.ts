import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCidChartPageComponent } from './timeline-cid-chart-page.component';

describe('TimelineCidChartComponent', () => {
  let component: TimelineCidChartPageComponent;
  let fixture: ComponentFixture<TimelineCidChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineCidChartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCidChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
