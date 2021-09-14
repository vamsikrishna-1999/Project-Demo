import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  LoginForm=new FormGroup
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })
  public loginObj={email:'',pwd:''} 
  boo:any;
  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void { }
  login()
  {
      this.auth.loginUser(this.loginObj);
      //location.assign('http://localhost:4300/');
  }
  logout()
  {
      this.auth.logoutUser();
      location.assign('/login');
  }

  submitData()
  {
    
  }

}
