import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowRightComponent } from './double-arrow-right/double-arrow-right.component';
import { MoonIconComponent } from './moon-icon/moon-icon.component';
import { SunIconComponent } from './sun-icon/sun-icon.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { CurriculumVitaeIconComponent } from './curriculum-vitae-icon/curriculum-vitae-icon.component';

@NgModule({
  declarations: [
    DoubleArrowRightComponent,
    MoonIconComponent,
    SunIconComponent,
    InfoIconComponent,
    CurriculumVitaeIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    DoubleArrowRightComponent,
    MoonIconComponent,
    SunIconComponent,
    InfoIconComponent,
    CurriculumVitaeIconComponent,
  ],
})
export class IconsModule {}
