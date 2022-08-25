import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User{
  id?:Number;
  firstName:string;
  lastName:string;
  DOB:Date;
  email:String;
}
export interface Post{
  id?:Number;
  title:string;
}
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor(public http: HttpClient) { }
  
  public GetUser():Observable<User[]>{
    //return this.http.get<User[]>("https://localhost:7216/api/User/GetAll");
    return this.http.get<User[]>("./assets/file.json");
  }
  public GetOneUser(id:number):Observable<User[]>{
    return this.http.get<User[]>(" https://localhost:7216/api/User/GetUser"+"/"+id);
  }

  deleteUer(user:User){
    return this.http.delete("https://localhost:7216/api/User/Delete");
    }
  public PostUser(user:User):Observable<User>{
    return this.http.post<User>("./assets/file.json",user);
    //return this.http.post<User>("https://localhost:7216/api/User/Create",user);
  }
  public UpdateUser(user:User):Observable<User>{
    return this.http.put<User>("https://localhost:7216/api/User/Update",user);
  }
  ////////////
  public GetPost():Observable<Post[]>{
    
    return this.http.get<Post[]>("https://localhost:7216/api/Post/GetAll");
  }
  public AddPost(post:Post):Observable<Post>{
    return this.http.post<Post>("https://localhost:7216/api/Post/Create",post);
  }



}



