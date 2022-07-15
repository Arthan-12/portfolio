import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIconComponent } from './team-icon.component';

describe('TeamIconComponent', () => {
  let component: TeamIconComponent;
  let fixture: ComponentFixture<TeamIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
