import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownIconComponent } from './crown-icon.component';

describe('CrownIconComponent', () => {
  let component: CrownIconComponent;
  let fixture: ComponentFixture<CrownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
