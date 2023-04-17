import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialsComponent } from './celestials.component';

describe('CelestialsComponent', () => {
  let component: CelestialsComponent;
  let fixture: ComponentFixture<CelestialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelestialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelestialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
