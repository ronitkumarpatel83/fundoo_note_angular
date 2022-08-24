import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

Registration(data:any){
  let header = {
    headers:new HttpHeaders({
    'Content-type':'application/json'
    })
    }
    return this.http.postservice('http://127.0.0.1:8000/user/register/', data,false,header)
  }

  Login(data:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    console.log(header)
    return this.http.postservice("http://127.0.0.1:8000/user/login/",data,false,header)
  }
}

