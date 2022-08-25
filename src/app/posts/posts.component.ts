import { PopStateEvent } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Post, SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  PostList:{
    id?:Number,
    title:string;
   
  }[]=[
      /*{
      id:1,
      title:"TasneemNairat"
      },
      {
        id:2,
        title:"Pppppppp"
      }*/
  ];
  newpost:Post={id:0,title:''};
  Cdate=new Date;
  date=this.Cdate.getDate();
  l=this.PostList.length;
  constructor(private PostService:SharedServiceService) { }
  ngOnInit(): void {
    this.PostService.GetPost().subscribe(data=>this.PostList=data);
  }
  AddPost(newpost:Post){
    this.PostList.push(newpost);
    /*
    let text=document.getElementById("floatingTextarea21")?.ariaValueText;
    
    if(text!=null){ 
      let Demo=document.getElementById("Demo")!;
      let result=`<div class="container shading p-3 mb-5 bg-white rounded">${text}</div>`;
      //let result= `New Post`;
      Demo.innerHTML+=result;
      this.newpost.title=text;
      this.newpost.id=this.l;
      this.PostService.AddPost(this.newpost).subscribe();}*/
      }
  }

