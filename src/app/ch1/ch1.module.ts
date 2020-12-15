import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ch1PageRoutingModule } from './ch1-routing.module';

import { Ch1Page } from './ch1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ch1PageRoutingModule
  ],
  declarations: [Ch1Page]
})
export class Ch1PageModule {}
