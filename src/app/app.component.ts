import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface userVm {
  id:Number;
  name:String;
  email:String;
  age:Number;
  password:String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserProject';
  // name:string ="Tasneem";
  //x:Xtype={name="tasnem"} ->object
  //x:string[]=["assets"] ->array 

  UserList:userVm[]=[

  ]
  newUser:userVm= {id:0 , name:'' ,email:'' , age:0 ,password:''};
  i:number =this.UserList.length;
  AddUser(form:NgForm){
    //this.UserList.push({...this.newUser})
   // let i=0;
    if(!form.form.valid){
    form.form.markAllAsTouched();
    }else{
    this.UserList.push({id:this.i,name:this.newUser.name,age:this.newUser.age,email:this.newUser.email,password:this.newUser.password});
    this.i++;
  }
  }
  deleteUser(user: userVm){
    let i= this.UserList.indexOf(user);
    if (i>=0){
      this.UserList.splice(i,1);
    }
  }  
}
