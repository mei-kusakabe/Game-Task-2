import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  disId: string = '';
  sub_disId: string = '';
  agent_Id: string = '';

  constructor(public db: AngularFireDatabase, public router: Router, public ar: ActivatedRoute) {

    this.disId = ar.snapshot.params['disId']
    this.sub_disId = ar.snapshot.params['sub_disId']
    this.agent_Id = ar.snapshot.params['agent_Id']


  }

  addUser(value: NgForm['value']) {
    this.db.list('admin/' + this.disId + "/sub-dis/" + this.sub_disId + '/agent/' + this.agent_Id + '/users').push(value).then(
      snap => {
        const s = snap.key;
        snap.update({ id: s });
      }

    );
    this.router.navigate(['/'])

  }
}
