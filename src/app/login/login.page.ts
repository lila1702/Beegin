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

  user: string;
  senha: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Username:" +this.user);
    console.log("Password:" +this.senha);
    if(this.user != null || this.senha != null)
    {
      this.route.navigateByUrl('home')
    }
    else{
      alert("Por favor, não deixe nenhum dos campos em branco.")
    }
  }

}
