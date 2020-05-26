import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addBooks',
    loadChildren: () => import('./pages/addBook/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./pages/person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'add-person',
    loadChildren: () => import('./pages/add-person/add-person.module').then( m => m.AddPersonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
