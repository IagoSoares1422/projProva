import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private router: Router) { }
  
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  fazerLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    if(email =="iago" && password =='123'){
      alert('Bem vindo!!');
      this.router.navigate(['home']);      
    }else{
      alert('Login ou senha incorretos');
      this.router.navigate(['login']); 
    }
  }
}
