import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HomeModule } from './features/home/home.module';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { NotFoundModule } from './features/not-found/not-found.module';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MasterPageComponent,
    //redirect to the component module
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
        data: {
          title: 'Home',
          description: 'welcome to v-tracker, your 24hrs vehicle tracking system.'        
        },
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
        data: {
          title: 'Home',
          description: 'welcome to v-tracker, your 24hrs vehicle tracking system.',
        },
      },

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m): typeof DashboardModule => m.DashboardModule
          ),
        data: {
          title: 'Dashboard',
          description: 'track, locate, and monitor your vehicles on real-time.',
        },
      },

      {
        path: 'page-not-found',
        loadChildren: () =>
          import('./features/not-found/not-found.module').then(
            (m): typeof NotFoundModule => m.NotFoundModule
          ),
        data: {
          title: 'Page not found',
          description: 'sorry, the page you are looking for was not found.'
        },
      },
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
