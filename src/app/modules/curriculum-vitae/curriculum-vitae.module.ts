import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaePageComponent } from './pages/curriculum-vitae-page.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { MoreInfoPanelComponent } from './components/more-info-panel/more-info-panel.component';

@NgModule({
  declarations: [CurriculumVitaePageComponent, MoreInfoPanelComponent],
  imports: [CommonModule, IconsModule],
  exports: [CurriculumVitaePageComponent, MoreInfoPanelComponent],
})
export class CurriculumVitaeModule {}
