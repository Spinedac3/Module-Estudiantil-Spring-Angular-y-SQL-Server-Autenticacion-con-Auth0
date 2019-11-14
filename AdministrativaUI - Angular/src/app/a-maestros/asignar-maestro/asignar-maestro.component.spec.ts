import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMaestroComponent } from './asignar-maestro.component';

describe('AsignarMaestroComponent', () => {
  let component: AsignarMaestroComponent;
  let fixture: ComponentFixture<AsignarMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
