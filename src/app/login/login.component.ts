import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }


    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  fazerLogin() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    if(email == 'iago' and password == '12345'){

    }else{
      
    }
  }
}
