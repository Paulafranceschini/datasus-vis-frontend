import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidListPageComponent } from './cid-list-page.component';

describe('CidListPageComponent', () => {
  let component: CidListPageComponent;
  let fixture: ComponentFixture<CidListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
