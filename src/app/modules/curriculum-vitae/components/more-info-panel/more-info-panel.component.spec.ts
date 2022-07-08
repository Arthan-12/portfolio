import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoPanelComponent } from './more-info-panel.component';

describe('MoreInfoPanelComponent', () => {
  let component: MoreInfoPanelComponent;
  let fixture: ComponentFixture<MoreInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
