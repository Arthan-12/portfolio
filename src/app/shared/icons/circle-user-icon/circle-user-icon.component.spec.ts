import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleUserIconComponent } from './circle-user-icon.component';

describe('CircleUserIconComponent', () => {
  let component: CircleUserIconComponent;
  let fixture: ComponentFixture<CircleUserIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleUserIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleUserIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
