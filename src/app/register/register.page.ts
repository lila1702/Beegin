import { FormControl, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormControl;

  email = '';
  senha = '';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  register(){
    this.route.navigateByUrl('login')
  }
}
