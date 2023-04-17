import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialListItemComponent } from './celestial-list-item.component';

describe('CelestialListItemComponent', () => {
  let component: CelestialListItemComponent;
  let fixture: ComponentFixture<CelestialListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelestialListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelestialListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
