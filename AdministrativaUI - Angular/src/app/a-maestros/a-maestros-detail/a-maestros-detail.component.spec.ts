import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMaestrosDetailComponent } from './a-maestros-detail.component';

describe('AMaestrosDetailComponent', () => {
  let component: AMaestrosDetailComponent;
  let fixture: ComponentFixture<AMaestrosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMaestrosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMaestrosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
