import { UsersService } from './../users.service';
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

  user = '';
  senha = '';
  resenha = '';

  constructor(private route: Router, public myService:UsersService) { }

  ngOnInit() {
  }

  register(){
    
    if(this.senha != this.resenha){
      alert('Suas senhas não são iguais.')
    }
    else if(this.user.length == 0 || this.senha.length == 0 || this.resenha.length == 0){
      alert('Por favor, não deixe nenhum dos campos em branco.')
    }
    else{
      this.myService.user = this.user;
      this.myService.password = this.senha;
      console.log("Username Global:" +this.myService.user);
      console.log("Senha Global:" +this.myService.password);
      this.route.navigateByUrl('login')
    }
  }
}
