import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleArrowRightComponent } from './double-arrow-right.component';

describe('DoubleArrowRightComponent', () => {
  let component: DoubleArrowRightComponent;
  let fixture: ComponentFixture<DoubleArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleArrowRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
