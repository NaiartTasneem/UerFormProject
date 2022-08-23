import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService, User } from '../../shared-service.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserList:{  firstName:string,lastName:string;}[]=[];
  //UserList:{ id?:Number ,name:String, email:String, age:Number, DOB:Date, password:String;}[]=[];
  constructor(private UserService:SharedServiceService) {
      
  }

  ngOnInit(): void {
    this.UserService.GetUser().subscribe(data=>this.UserList=data);
    //this.users=this.UserService.UserList;
    
  }
  i:number =this.UserList.length;
/* AddUser(user:User){
      
    user.id=this.i;
    this.UserService.UserList.push({...user});
    this.i++;
  }*/
  
  deleteUser(user:User){
    let i= this.UserList.indexOf(user);
    if (i>=0){
      this.UserList.splice(i,1);
    }
  }  



}
