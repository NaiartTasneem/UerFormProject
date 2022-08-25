import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService, User } from '../../shared-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserList:{
    id?:Number,
    firstName:string,
    lastName:string;
    DOB:Date,
    email:String,
  }[]=[];
  
  constructor(private UserService:SharedServiceService ,public router:Router) {
      
  }

  ngOnInit(): void {
    this.UserService.GetUser().subscribe(data=>this.UserList=data);
    //this.users=this.UserService.UserList;
    
  }

  i =this.UserList.length;
/* AddUser(user:User){
    user.id=this.i;
    this.UserService.UserList.push({...user});
    this.i++;
  }*/
  editUser(user: User) {
    this.router.navigate(["users/" + user.id]);
  }
  deleteUser(user:User){
    let z= this.UserList.indexOf(user);
    if (z>=0){
      this.UserList.splice(z,1);
    }
  }  



}
