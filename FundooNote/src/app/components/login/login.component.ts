import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log("Invalid username or password");
    }
    else{
      console.log("Login Successfully Completed");
      let data={
        email:this.loginForm.value.username,
        password:this.loginForm.value.password
      }
      this.user.Login(data).subscribe((response:any)=> {
        console.log("login response =====", response); 
      })
      
    }
  }
}