import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'my-mangas',
    pathMatch: 'full'
  },
  {
    path: 'create-user',
    loadChildren: () => import('./create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'my-mangas',
    loadChildren: () => import('./my-mangas/my-mangas.module').then( m => m.MyMangasPageModule)
  },
  {
    path: 'update-manga',
    loadChildren: () => import('./update-manga/update-manga.module').then( m => m.UpdateMangaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
