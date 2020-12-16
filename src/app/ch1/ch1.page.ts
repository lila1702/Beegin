import { ChoicesService } from './../choices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.page.html',
  styleUrls: ['./ch1.page.scss'],
})
export class Ch1Page implements OnInit {

  constructor(public myService:ChoicesService) { }

  ngOnInit() {
  }

  butt1A(){
    this.myService.ch1_esc1A = true;
    console.log('Você escolheu A');
  }
  butt1B(){
    this.myService.ch1_esc1B = true;
    console.log('Você escolheu B');
  }
}
