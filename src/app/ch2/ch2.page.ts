import { ChoicesService } from './../choices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch2',
  templateUrl: './ch2.page.html',
  styleUrls: ['./ch2.page.scss'],
})
export class Ch2Page implements OnInit {

  constructor(public myService:ChoicesService) { }

  ngOnInit() {
  }

}
