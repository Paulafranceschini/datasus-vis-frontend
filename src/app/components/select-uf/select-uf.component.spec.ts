import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUfComponent } from './select-uf.component';

describe('SelectUfComponent', () => {
  let component: SelectUfComponent;
  let fixture: ComponentFixture<SelectUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
