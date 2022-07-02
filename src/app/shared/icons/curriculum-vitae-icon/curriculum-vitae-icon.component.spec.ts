import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumVitaeIconComponent } from './curriculum-vitae-icon.component';

describe('CurriculumVitaeIconComponent', () => {
  let component: CurriculumVitaeIconComponent;
  let fixture: ComponentFixture<CurriculumVitaeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumVitaeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumVitaeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
