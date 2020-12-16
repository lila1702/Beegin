import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegilogPageRoutingModule } from './regilog-routing.module';

import { RegilogPage } from './regilog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegilogPageRoutingModule
  ],
  declarations: [RegilogPage]
})
export class RegilogPageModule {}
