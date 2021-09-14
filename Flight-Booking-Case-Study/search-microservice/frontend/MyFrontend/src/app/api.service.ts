import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  message:any;
  users:any;
  constructor(private http:HttpClient) 
  { 

  }

  getDataApi()
  {
    this.http.get('http://localhost:1330/post').subscribe(res =>
    {
      console.log(res);
      this.message=res;
    })
  }
  getUsers(starting:any,ending:any,departure:any,return1:any,type1:any)
  {
    this.http.get(`http://localhost:1330/user/${starting}/${ending}/${departure}/${return1}/${type1}`).subscribe(res =>
    {
      console.log(res);
      this.users=res;
    })
  } 
 
  registerUser(registerObj:any)
  {
    this.http.post('http://localhost:1330/register',registerObj).subscribe(res =>
    {
      
      console.log(res);
      
    })
  }

  senddata(starting:any,ending:any,departure:any,return1:any,type1:any)
  {
      this.http.post(`http://localhost:3000/user/${starting}/${ending}/${departure}/${return1}/${type1}`,{}).subscribe(res=>
      {
            console.log(res);
      })
  }

}
