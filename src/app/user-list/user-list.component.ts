import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService, User } from '../shared-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:{ id?:Number ,name:String, email:String, age:Number, password:String;}[]=[];
  constructor(private UserService:SharedServiceService) {
      
  }

  ngOnInit(): void {
    this.users=this.UserService.UserList;
  }
  i:number =this.UserService.UserList.length;
 /* AddUser(user:User){
      
    user.id=this.i;
    this.UserService.UserList.push({...user});
    this.i++;
  }*/
  
  deleteUser(user:User){
    let i= this.UserService.UserList.indexOf(user);
    if (i>=0){
      this.UserService.UserList.splice(i,1);
    }
  }  



}
