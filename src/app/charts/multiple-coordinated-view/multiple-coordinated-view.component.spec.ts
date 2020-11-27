import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCoordinatedViewComponent } from './multiple-coordinated-view.component';

describe('MultipleCoordinatedViewComponent', () => {
  let component: MultipleCoordinatedViewComponent;
  let fixture: ComponentFixture<MultipleCoordinatedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleCoordinatedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCoordinatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
