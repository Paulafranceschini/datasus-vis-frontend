import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderAgePyramidComponent } from './gender-age-pyramid-page.component';

describe('GenderAgePyramidComponent', () => {
  let component: GenderAgePyramidComponent;
  let fixture: ComponentFixture<GenderAgePyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderAgePyramidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderAgePyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
