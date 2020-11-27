import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFiltersComponent } from './filters.component';

describe('AppFiltersComponent', () => {
  let component: AppFiltersComponent;
  let fixture: ComponentFixture<AppFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
