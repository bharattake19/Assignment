import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: 'student',
  loadChildren: './student/student.module#StudentModule'
},
{
  path:'course',
  loadChildren: './courses/courses.module#CoursesModule'
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
  component: HomeComponent
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
