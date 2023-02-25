import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-sub-dis',
  templateUrl: './show-sub-dis.component.html',
  styleUrls: ['./show-sub-dis.component.css']
})
export class ShowSubDisComponent {

  disId?: string;
  sub_disId?: string;
  sub_dis_arr?: any[];

  constructor(public db: AngularFireDatabase, public ar: ActivatedRoute) {

    this.disId = ar.snapshot.params["disId"];
    console.log(this.disId);


    db.list("admin/" + this.disId + "/sub-dis").valueChanges().forEach(allsubdis => {
      console.log(allsubdis);
      this.sub_dis_arr = allsubdis;
    })

  }
}
