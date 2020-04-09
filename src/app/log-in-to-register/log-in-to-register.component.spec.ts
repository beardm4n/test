import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInToRegisterComponent } from './log-in-to-register.component';

describe('LogInToRegisterComponent', () => {
  let component: LogInToRegisterComponent;
  let fixture: ComponentFixture<LogInToRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInToRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInToRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
