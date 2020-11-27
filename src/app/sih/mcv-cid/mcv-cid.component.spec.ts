import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McvCidComponent } from './mcv-cid.component';

describe('McvCidComponent', () => {
  let component: McvCidComponent;
  let fixture: ComponentFixture<McvCidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McvCidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McvCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
