import { FormControl, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormControl;

  email = '';
  senha = '';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.route.navigateByUrl('home')
  }

}
