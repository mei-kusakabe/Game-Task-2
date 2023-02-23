import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import{Database} from '@angular/fire/database'
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  des_arr:any= [];
  constructor(public db: AngularFireDatabase) {
    db.list('admin').valueChanges().forEach(data=>{
      this.des_arr = (data) 
    })
   }
   
   ngOnInit() {
      console.log(this.des_arr,"uhu")
   }

   addDes(value:NgForm['value']) {
    this.db.list(value.sadf)
   }

   delete(id:string) {
    console.log("alkjsd")
    this.db.list('admin/'+id).remove();
    console.log("asldjklf")
   }
}
