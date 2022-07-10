import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandShakeIconComponent } from './hand-shake-icon.component';

describe('HandShakeIconComponent', () => {
  let component: HandShakeIconComponent;
  let fixture: ComponentFixture<HandShakeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandShakeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandShakeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
