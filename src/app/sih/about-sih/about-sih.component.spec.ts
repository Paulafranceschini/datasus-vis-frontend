import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSihComponent } from './about-sih.component';

describe('AboutSihComponent', () => {
  let component: AboutSihComponent;
  let fixture: ComponentFixture<AboutSihComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSihComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
