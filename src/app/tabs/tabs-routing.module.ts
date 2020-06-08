import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../pages/books/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'author',
        loadChildren: () => import('../pages/person/person.module').then(m => m.PersonPageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../pages/configuration/configuration.module').then(m => m.ConfigurationPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
