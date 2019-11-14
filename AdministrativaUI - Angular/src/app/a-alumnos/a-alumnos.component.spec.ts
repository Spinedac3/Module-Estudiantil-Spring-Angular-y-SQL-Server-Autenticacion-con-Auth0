import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAlumnosComponent } from './a-alumnos.component';

describe('AAlumnosComponent', () => {
  let component: AAlumnosComponent;
  let fixture: ComponentFixture<AAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
