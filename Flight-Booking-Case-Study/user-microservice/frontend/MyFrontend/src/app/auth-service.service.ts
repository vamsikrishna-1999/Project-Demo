import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public token:any;
  public bool:any;
  constructor(private http:HttpClient) { }
  registerUser(registerObj:any)
  {
    this.http.post('http://localhost:1220/register',registerObj).subscribe(res =>
    {
      console.log(res);
    });
  }

  loginUser(loginObj:any)
  {
    this.http.post('http://localhost:1220/login',loginObj).subscribe(res =>
    {
      
        console.log(res);
        this.token=res;
        console.log(this.token);
        localStorage.setItem('token',this.token.token);
        alert("login success")
        location.assign('http://localhost:4300/');
      
      
      
    });
  }
  logoutUser()
  {
    localStorage.removeItem('token')
  }
}
