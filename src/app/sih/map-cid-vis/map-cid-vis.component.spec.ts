import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCidVisComponent } from './map-cid-vis.component';

describe('MapCidVisComponent', () => {
  let component: MapCidVisComponent;
  let fixture: ComponentFixture<MapCidVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCidVisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCidVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
