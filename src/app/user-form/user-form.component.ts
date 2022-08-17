import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userVm } from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
@Input() newUser:userVm ={id:0 , name:'' ,email:'' , age:0 ,password:''};
@Output() NewUser :EventEmitter<userVm>=new EventEmitter<userVm>();


  constructor() { }

  ngOnInit(): void {
    
  }
  AddUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
      }else{
        this.NewUser.emit(); 
      }


  }
}
