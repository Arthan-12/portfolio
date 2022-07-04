import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaePageComponent } from './pages/curriculum-vitae-page.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [CurriculumVitaePageComponent],
  imports: [CommonModule, IconsModule],
  exports: [CurriculumVitaePageComponent],
})
export class CurriculumVitaeModule {}
