import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SihDataListComponent } from './sih-data-list.component';

describe('SihDataListComponent', () => {
  let component: SihDataListComponent;
  let fixture: ComponentFixture<SihDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SihDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SihDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
