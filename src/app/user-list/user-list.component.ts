import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  disId: string = ' ';
  sub_disId: string = '';
  agent_Id: string = '';
  url?: string;
  users_arr: any = [];

  constructor(public ActiveR: ActivatedRoute, public firebaseDatabase: AngularFireDatabase) {


    this.disId = ActiveR.snapshot.params['disId'];
    this.sub_disId = ActiveR.snapshot.params['sub_disId'];
    this.agent_Id = ActiveR.snapshot.params['agent_Id'];

    firebaseDatabase.list('admin/' + this.disId + '/sub-dis/' + this.sub_disId + '/agent/' + this.agent_Id + '/users').valueChanges().forEach(users => {
      this.users_arr = (users)
      // console.log(users);
    })


  }
}
