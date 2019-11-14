import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasDetailComponent } from './notas-detail.component';

describe('NotasDetailComponent', () => {
  let component: NotasDetailComponent;
  let fixture: ComponentFixture<NotasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
