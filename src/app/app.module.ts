import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { GamesComponent } from './games/games.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { LastWinsComponent } from './last-wins/last-wins.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AgentComponent } from './agent/agent.component';
import { MembersInGameComponent } from './members-in-game/members-in-game.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditdisComponent } from './editdis/editdis.component';
import { AddagentComponent } from './addagent/addagent.component';
import { EditagentComponent } from './editagent/editagent.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { ShowSubDisComponent } from './show-sub-dis/show-sub-dis.component';
import { AddsubdisComponent } from './addsubdis/addsubdis.component';
import { AdduserComponent } from './adduser/adduser.component';



const appRouts: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddplayerComponent },
  { path: 'dis/:disId/sub-dis/:sub_disId/addagent', component: AddagentComponent },
  { path: 'dis/:disId/sub-dis/addsubdis', component: AddsubdisComponent },
  { path: 'dis/:disId/sub-dis/:sub_disId/agent/:agent_Id/adduser', component: AdduserComponent },
  { path: 'last-matches/:id', component: LastWinsComponent },
  { path: 'dis/:disId/sub-dis/:sub_disId/agent', component: AgentComponent },
  { path: 'dis/:disId/agent/:agentId', component: EditagentComponent },
  { path: 'dis/:disId/sub-dis/:sub_disId/agent/:agent_Id/users', component: UserListComponent },
  { path: 'members', component: AgentComponent },
  { path: '', component: HomeComponent },
  { path: '', component: AgentListComponent },
  { path: 'dis/:id', component: EditdisComponent },
  { path: 'dis/:disId/sub-dis', component: ShowSubDisComponent },
  { path: 'memberdetails/:m-id', component: PlayerdetailsComponent },
  // {path:'dis/:id/agent/:agentid',component:EditdisComponent},
  // {path:'dis/:id/agent/:agentid/player/:playerid',component:EditdisComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GamesComponent,
    LoginComponent,
    AddplayerComponent,
    LastWinsComponent,
    AgentComponent,
    MembersInGameComponent,
    AgentListComponent,
    UserListComponent,

    EditdisComponent,
    AddagentComponent,
    EditagentComponent,
    PlayerdetailsComponent,
    ShowSubDisComponent,
    AddsubdisComponent,
    AdduserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
