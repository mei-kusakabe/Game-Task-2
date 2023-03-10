import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database } from '@angular/fire/database'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"


@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent {
  disId: string = '';
  sub_disId: string = '';

  constructor(public db: AngularFireDatabase, public router: Router, public ar: ActivatedRoute) {

    this.disId = ar.snapshot.params['disId']
    this.sub_disId = ar.snapshot.params['sub_disId']

  }

  addAgent(value: NgForm['value']) {
    this.db.list('admin/' + this.disId + "/sub-dis/" + this.sub_disId + '/agent').push(value).then(
      snap => {
        const s = snap.key;
        snap.update({ id: s });
      }
    );
    this.router.navigate(['/'])
  }
}