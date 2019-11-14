import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesComponent } from './credenciales.component';

describe('CredencialesComponent', () => {
  let component: CredencialesComponent;
  let fixture: ComponentFixture<CredencialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
