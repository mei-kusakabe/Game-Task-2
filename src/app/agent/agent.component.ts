import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  disId: string = ' ';
  sub_disId: string = '';
  url?: string;
  agent_arr: any = [];
  constructor(public ActiveR: ActivatedRoute, public firebaseDatabase: AngularFireDatabase) {

    this.disId = ActiveR.snapshot.params['disId'];
    this.sub_disId = ActiveR.snapshot.params['sub_disId'];

    // console.log(this.disId)
    // console.log(this.sub_disId)


    firebaseDatabase.list('admin/' + this.disId + '/sub-dis/' + this.sub_disId + '/agent').valueChanges().forEach(agents => {

      // console.log(agents);
      this.agent_arr = (agents);
    })


  }
}
