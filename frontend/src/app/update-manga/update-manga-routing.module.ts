import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMangaPage } from './update-manga.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMangaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMangaPageRoutingModule {}
