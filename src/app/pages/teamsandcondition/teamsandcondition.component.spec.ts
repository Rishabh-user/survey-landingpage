import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsandconditionComponent } from './teamsandcondition.component';

describe('TeamsandconditionComponent', () => {
  let component: TeamsandconditionComponent;
  let fixture: ComponentFixture<TeamsandconditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsandconditionComponent]
    });
    fixture = TestBed.createComponent(TeamsandconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
