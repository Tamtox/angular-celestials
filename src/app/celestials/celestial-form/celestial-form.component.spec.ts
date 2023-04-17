import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialFormComponent } from './celestial-form.component';

describe('CelestialFormComponent', () => {
  let component: CelestialFormComponent;
  let fixture: ComponentFixture<CelestialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelestialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelestialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
