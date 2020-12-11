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
    if(this.email == 'lila.msfrazao@gmail.com' && this.senha == '1702')
    {
      this.route.navigateByUrl('home')
    }
  }

}
