import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McPage } from './mc.page';

const routes: Routes = [
  {
    path: '',
    component: McPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McPageRoutingModule {}
