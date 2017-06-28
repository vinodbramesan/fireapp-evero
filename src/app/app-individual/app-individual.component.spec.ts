import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIndividualComponent } from './app-individual.component';

describe('AppIndividualComponent', () => {
  let component: AppIndividualComponent;
  let fixture: ComponentFixture<AppIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
