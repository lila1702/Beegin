import { UsersService } from './../users.service';
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

  constructor(private route: Router, public myService:UsersService) { }

  ngOnInit() {
  }

  login(){
    if(this.user == this.myService.user && this.senha == this.myService.password){
      this.route.navigateByUrl('home')
    }
    else if (this.user != this.myService.user && this.myService.user == null){
      alert("Você não está registrado. Iremos te redirecionar automaticamente.");
      this.route.navigateByUrl('register')
    }
    else if (this.user != this.myService.user){
      alert("Nome não encontrado na base de dados. Possivel erro de digitação.");
    }
    else if(this.user == this.myService.user && this.senha != this.myService.password){
      alert("Senha errada.")
    }
    else{
      alert("Por favor, não deixe nenhum dos campos em branco.");
    }
    console.log("Username:" +this.myService.user);
    console.log("Password:" +this.myService.password);
  }

}
