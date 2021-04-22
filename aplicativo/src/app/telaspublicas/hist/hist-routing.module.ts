import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistPage } from './hist.page';

const routes: Routes = [
  {
    path: '',
    component: HistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistPageRoutingModule {}
