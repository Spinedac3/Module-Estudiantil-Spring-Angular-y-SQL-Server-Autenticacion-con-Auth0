import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAlumnoComponent } from './asignar-alumno.component';

describe('AsignarAlumnoComponent', () => {
  let component: AsignarAlumnoComponent;
  let fixture: ComponentFixture<AsignarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
