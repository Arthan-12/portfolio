import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MainPageLayoutComponent } from './layout/main-page-layout/main-page-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../shared/icons/icons.module';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './errors/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, MainPageLayoutComponent, SidebarComponent, NotFoundPageComponent],
  imports: [CommonModule, RouterModule, SharedModule, IconsModule],
  exports: [HeaderComponent, MainPageLayoutComponent, SidebarComponent],
})
export class CoreModule {}
