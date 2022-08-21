
import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GetAgePipe } from 'src/app/get-age.pipe';
import { SharedServiceService, User } from '../../shared-service.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

public NewUser: User ={id:0 , name:'' ,email:'' , age:0, DOB: new Date() ,password:''};

  constructor(private UserService:SharedServiceService, 
  public router:Router,public getAge:GetAgePipe) {

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
      this.NewUser.age=this.getAge.transform(this.NewUser.DOB);
      this.UserService.UserList.push(this.NewUser);
      this.router.navigate(['/users/user-list']);
      this.NewUser={id:0 , name:'' ,email:'' , age:0, DOB:new Date() ,password:''};
      }


  }

}


