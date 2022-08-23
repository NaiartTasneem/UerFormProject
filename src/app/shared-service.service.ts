import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User{
  firstName:string;
  lastName:string;

  /*id?:Number;
  name:String;
  email:String;
  age:Number;
  DOB:Date;
  password:String;*/
}

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(public http: HttpClient) { }
  
  
  
  public GetUser():Observable<User[]>{
    //return this.http.get<User[]>(" https://localhost:7216/api/User/GetAll");
    return this.http.get<User[]>("./assets/file.json");
  }

  public PostUser(user:User):Observable<User>{
    return this.http.post<User>("https://localhost:7216/api/User/Create",user);
  }
}



