import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  disId:string=' ';
  url?:string;
  agent_arr:any= [];
   constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
 
     firebaseDatabase.list('agent').valueChanges().forEach(data=>{
       this.agent_arr = (data) 
     })
    
   this.disId = ActiveR.snapshot.params['disId'];
   
   firebaseDatabase.list('agent/'+this.disId).valueChanges().forEach(s=>{
     console.log(s);
   })
  }
}
