import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch2PageRoutingModule } from './ch2-routing.module';

import { Ch2Page } from './ch2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch2PageRoutingModule
  ],
  declarations: [Ch2Page]
})
export class Ch2PageModule {}
