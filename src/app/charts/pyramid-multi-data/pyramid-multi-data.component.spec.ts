import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidMultiDataComponent } from './pyramid-multi-data.component';

describe('PyramidMultiDataComponent', () => {
  let component: PyramidMultiDataComponent;
  let fixture: ComponentFixture<PyramidMultiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidMultiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidMultiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
