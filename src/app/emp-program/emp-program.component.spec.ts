import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProgramComponent } from './emp-program.component';

describe('EmpProgramComponent', () => {
  let component: EmpProgramComponent;
  let fixture: ComponentFixture<EmpProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
