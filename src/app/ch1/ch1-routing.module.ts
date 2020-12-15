import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ch1Page } from './ch1.page';

const routes: Routes = [
  {
    path: '',
    component: Ch1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ch1PageRoutingModule {}
