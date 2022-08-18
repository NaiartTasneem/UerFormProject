import { formatCurrency } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserProject';
  @Input() UserList:User[]=[

  ]
  //= {id:0 , name:'' ,email:'' , age:0 ,password:''};
  i:number =this.UserList.length;
  AddUser(user:User){
    
    this.UserList.push(user);
  }
  
  deleteUser(user:User){
    let i= this.UserList.indexOf(user);
    if (i>=0){
      this.UserList.splice(i,1);
    }
  }  
  /*UpdateUser(user:User){

  }*/
}
