
import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedServiceService, User } from '../shared-service.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

public NewUser:User ={id:0 , name:'' ,email:'' , age:0 ,password:''};

  constructor(private UserService:SharedServiceService) {

    }

  ngOnInit(): void {
    
  }
  i:number =this.UserService.UserList.length;
  AddUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
      }else{
        this.NewUser.id=this.i;
        this.i++;
      this.UserService.UserList.push(this.NewUser);
      this.NewUser={id:0 , name:'' ,email:'' , age:0 ,password:''};
      }


  }

}

