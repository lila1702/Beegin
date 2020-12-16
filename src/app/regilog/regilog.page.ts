import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regilog',
  templateUrl: './regilog.page.html',
  styleUrls: ['./regilog.page.scss'],
})
export class RegilogPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  register(){
    this.route.navigateByUrl('register')
  }

  login(){
    this.route.navigateByUrl('login')
  }
}
