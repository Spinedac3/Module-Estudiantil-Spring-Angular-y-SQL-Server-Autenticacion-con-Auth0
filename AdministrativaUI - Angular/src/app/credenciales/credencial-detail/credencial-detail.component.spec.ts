import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialDetailComponent } from './credencial-detail.component';

describe('CredencialDetailComponent', () => {
  let component: CredencialDetailComponent;
  let fixture: ComponentFixture<CredencialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
