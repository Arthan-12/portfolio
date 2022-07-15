import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactIconComponent } from './react-icon.component';

describe('ReactIconComponent', () => {
  let component: ReactIconComponent;
  let fixture: ComponentFixture<ReactIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
