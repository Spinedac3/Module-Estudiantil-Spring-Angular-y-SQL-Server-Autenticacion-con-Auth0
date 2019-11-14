import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCredencialComponent } from './create-credencial.component';

describe('CreateCredencialComponent', () => {
  let component: CreateCredencialComponent;
  let fixture: ComponentFixture<CreateCredencialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCredencialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
