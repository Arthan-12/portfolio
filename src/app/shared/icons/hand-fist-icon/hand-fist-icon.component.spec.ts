import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandFistIconComponent } from './hand-fist-icon.component';

describe('HandFistIconComponent', () => {
  let component: HandFistIconComponent;
  let fixture: ComponentFixture<HandFistIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandFistIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandFistIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
