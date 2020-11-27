import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCidComponent } from './select-cid.component';

describe('SelectCidComponent', () => {
  let component: SelectCidComponent;
  let fixture: ComponentFixture<SelectCidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
