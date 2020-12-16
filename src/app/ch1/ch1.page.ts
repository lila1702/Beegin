import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch1',
  templateUrl: './ch1.page.html',
  styleUrls: ['./ch1.page.scss'],
})
export class Ch1Page implements OnInit {

  showMe: boolean;

  constructor() { }

  ngOnInit() {
  }

  showThis(){
    this.showMe = true;
    console.log('Show Me true')
  }
}
