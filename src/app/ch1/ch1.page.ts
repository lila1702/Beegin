import { ChoicesService } from './../choices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.page.html',
  styleUrls: ['./ch1.page.scss'],
})
export class Ch1Page implements OnInit {

  constructor(private route: Router, public myService:ChoicesService) { }

  ngOnInit() {
  }

  butt1A(){
    this.myService.ch1_esc1A = true;
    console.log('Você comeu margarida condimentada');
  }
  butt1B(){
    this.myService.ch1_esc1B = true;
    console.log('Você comeu lírios partidos');
  }
  ch2(){
    this.route.navigateByUrl('ch2')
  }
}
