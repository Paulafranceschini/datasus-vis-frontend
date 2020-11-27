import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowListCidPageComponent } from './arrow-list-cid-page.component';

describe('ArrowListCidComponent', () => {
  let component: ArrowListCidPageComponent;
  let fixture: ComponentFixture<ArrowListCidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowListCidPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowListCidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
