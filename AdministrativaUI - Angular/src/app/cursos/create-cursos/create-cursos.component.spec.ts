import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCursosComponent } from './create-cursos.component';

describe('CreateCursosComponent', () => {
  let component: CreateCursosComponent;
  let fixture: ComponentFixture<CreateCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
