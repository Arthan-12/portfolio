import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaePageComponent } from './pages/curriculum-vitae-page.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { MoreInfoPanelComponent } from './components/more-info-panel/more-info-panel.component';
import { SoftSkillsCardComponent } from './components/soft-skills-card/soft-skills-card.component';
import { HardSkillsListComponent } from './components/hard-skills-list/hard-skills-list.component';

@NgModule({
  declarations: [CurriculumVitaePageComponent, MoreInfoPanelComponent, SoftSkillsCardComponent, HardSkillsListComponent],
  imports: [CommonModule, IconsModule],
  exports: [CurriculumVitaePageComponent, MoreInfoPanelComponent],
})
export class CurriculumVitaeModule {}
