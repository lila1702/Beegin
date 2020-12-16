import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegilogPage } from './regilog.page';

const routes: Routes = [
  {
    path: '',
    component: RegilogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegilogPageRoutingModule {}
