import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'serves',component:ServersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:Id/:Name',component:UsersComponent},
  {path:'serves/:Id/edit',component:EditServerComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
