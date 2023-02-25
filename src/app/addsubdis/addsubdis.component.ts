import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-addsubdis',
  templateUrl: './addsubdis.component.html',
  styleUrls: ['./addsubdis.component.css']
})
export class AddsubdisComponent {

  disId: string = '';
  sub_disId: string = '';


  constructor(public db: AngularFireDatabase, public router: Router, public ar: ActivatedRoute) {

    this.disId = ar.snapshot.params['disId']
    this.sub_disId = ar.snapshot.params['sub_disId']

    db.list('admin').valueChanges().forEach(data => {
      console.log(data)
    })
  }

  addSubdis(value: NgForm['value']) {
    this.db.list('admin/' + this.disId + "/sub-dis").push(value).then(
      snap => {
        const s = snap.key;
        snap.update({ id: s });
      }
    );
    this.router.navigate(['/'])
  }
}
