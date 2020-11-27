import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidScatterplotComponent } from './cid-scatterplot.component';

describe('CidScatterplotComponent', () => {
  let component: CidScatterplotComponent;
  let fixture: ComponentFixture<CidScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidScatterplotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
