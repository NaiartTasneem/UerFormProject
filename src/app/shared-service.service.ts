import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  UserList:User[]=[

  ]
  constructor() { }
}
export interface User{
  id?:Number;
  name:String;
  email:String;
  age:Number;
  password:String;
}
