import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', Validators.required],
  },);
  }

  onSubmit() {
    if(this.registerForm.valid){
      console.log("Valid data", this.registerForm.value)
      // let data = {
      //   firstname: this.registerForm.value.firstname,
      //   lastname: this.registerForm.value.lastname,
      //   username: this.registerForm.value.username,
      //   password: this.registerForm.value.password,
      // //   email: 
      // //   phone_number: 
      // //   location: 
      // }
    }else{
      console.log("Invalid data", this.registerForm.value)
    }
    
}

}
