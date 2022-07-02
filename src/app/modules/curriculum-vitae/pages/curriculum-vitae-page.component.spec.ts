import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumVitaePageComponent } from './curriculum-vitae-page.component';

describe('CurriculumVitaePageComponent', () => {
  let component: CurriculumVitaePageComponent;
  let fixture: ComponentFixture<CurriculumVitaePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumVitaePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumVitaePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
