import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMaestrosComponent } from './a-maestros.component';

describe('AMaestrosComponent', () => {
  let component: AMaestrosComponent;
  let fixture: ComponentFixture<AMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
