import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { userVm } from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
@Output() UserVm =new EventEmitter<User>();
public NewUser:User ={id:0 , name:'' ,email:'' , age:0 ,password:''};

  constructor() { }

  ngOnInit(): void {
    
  }
  AddUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
      }else{
        this.UserVm.emit(this.NewUser); 
      }


  }

}
export interface User{
  id:Number;
  name:String;
  email:String;
  age:Number;
  password:String;
}
