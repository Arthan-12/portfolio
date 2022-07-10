import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleArrowRightComponent } from './double-arrow-right/double-arrow-right.component';
import { MoonIconComponent } from './moon-icon/moon-icon.component';
import { SunIconComponent } from './sun-icon/sun-icon.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { CurriculumVitaeIconComponent } from './curriculum-vitae-icon/curriculum-vitae-icon.component';
import { CircleUserIconComponent } from './circle-user-icon/circle-user-icon.component';
import { GithubIconComponent } from './github-icon/github-icon.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';
import { LinkedinIconComponent } from './linkedin-icon/linkedin-icon.component';
import { HandShakeIconComponent } from './hand-shake-icon/hand-shake-icon.component';
import { CommentsIconComponent } from './comments-icon/comments-icon.component';

@NgModule({
  declarations: [
    DoubleArrowRightComponent,
    MoonIconComponent,
    SunIconComponent,
    InfoIconComponent,
    CurriculumVitaeIconComponent,
    CircleUserIconComponent,
    GithubIconComponent,
    WhatsappIconComponent,
    LinkedinIconComponent,
    HandShakeIconComponent,
    CommentsIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    DoubleArrowRightComponent,
    MoonIconComponent,
    SunIconComponent,
    InfoIconComponent,
    CurriculumVitaeIconComponent,
    CircleUserIconComponent,
    GithubIconComponent,
    WhatsappIconComponent,
    LinkedinIconComponent,
    HandShakeIconComponent,
    CommentsIconComponent,
  ],
})
export class IconsModule {}
