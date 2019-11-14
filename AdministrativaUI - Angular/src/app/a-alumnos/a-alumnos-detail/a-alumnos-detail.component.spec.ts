import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAlumnosDetailComponent } from './a-alumnos-detail.component';

describe('AAlumnosDetailComponent', () => {
  let component: AAlumnosDetailComponent;
  let fixture: ComponentFixture<AAlumnosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAlumnosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAlumnosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
