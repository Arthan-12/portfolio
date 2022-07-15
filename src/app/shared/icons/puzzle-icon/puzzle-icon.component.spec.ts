import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleIconComponent } from './puzzle-icon.component';

describe('PuzzleIconComponent', () => {
  let component: PuzzleIconComponent;
  let fixture: ComponentFixture<PuzzleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
