import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialListComponent } from './celestial-list.component';

describe('CelestialListComponent', () => {
  let component: CelestialListComponent;
  let fixture: ComponentFixture<CelestialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelestialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelestialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
