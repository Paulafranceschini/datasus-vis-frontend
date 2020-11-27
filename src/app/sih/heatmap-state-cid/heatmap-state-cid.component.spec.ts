import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapStateCidComponent } from './heatmap-state-cid.component';

describe('HeatmapStateCidComponent', () => {
  let component: HeatmapStateCidComponent;
  let fixture: ComponentFixture<HeatmapStateCidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapStateCidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapStateCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
