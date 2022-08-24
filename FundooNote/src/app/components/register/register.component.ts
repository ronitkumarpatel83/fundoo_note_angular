import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', Validators.required],
  },);
  }

  onSubmit() {
    if(this.registerForm.valid){
      console.log("Valid data", this.registerForm.value)
      let data = {
        first_name: this.registerForm.value.firstname,
        last_name: this.registerForm.value.lastname,
        username: "ronit44",
        password: this.registerForm.value.password,
        email: this.registerForm.value.username,
        phone_number: "1234567890",
        location: "odisha"
      }
      this.user.Registration(data).subscribe((result:any)=>{
        console.log("reg response =====", result)
      })

    }else{
      console.log("Invalid data", this.registerForm.value)
    }
    
}

}
