import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './pages/about-me-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutMePageComponent],
})
export class AboutMeModule {}
