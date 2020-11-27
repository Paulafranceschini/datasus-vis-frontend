import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowListChartComponent } from './arrow-list-chart.component';

describe('ArrowListChartComponent', () => {
  let component: ArrowListChartComponent;
  let fixture: ComponentFixture<ArrowListChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowListChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowListChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
