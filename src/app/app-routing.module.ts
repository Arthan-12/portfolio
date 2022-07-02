import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/errors/not-found-page/not-found-page.component';
import { MainPageLayoutComponent } from './core/layout/main-page-layout/main-page-layout.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { AboutMePageComponent } from './modules/about-me/pages/about-me-page.component';
import { CurriculumVitaePageComponent } from './modules/curriculum-vitae/pages/curriculum-vitae-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageLayoutComponent,
    children: [
      {
        path: '',
        component: SidebarComponent,
        children: [],
      },
      {
        path: 'sobre-mim',
        component: AboutMePageComponent,
        loadChildren: () =>
          import('./modules/about-me/about-me.module').then(
            (m) => m.AboutMeModule
          ),
      },
      {
        path: 'curriculum-vitae',
        component: CurriculumVitaePageComponent,
        loadChildren: () =>
          import('./modules/curriculum-vitae/curriculum-vitae.module').then(
            (m) => m.CurriculumVitaeModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    children: [{ path: '**', component: NotFoundPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
