import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/UserLogin/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers/auth.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { AddblogsComponent } from './addblogs/addblogs.component';
import { BlogsdetailsComponent } from './blogsdetails/blogsdetails.component';
import { EditblogsComponent } from './editblogs/editblogs.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blog', component: BlogsComponent, canActivate: [AuthGuard] },
  { path: 'addblog', component: AddblogsComponent , canActivate: [AuthGuard]},
  { path: 'addblog/:postId', component: AddblogsComponent , canActivate: [AuthGuard]},
  { path: 'blogdetails/:postId', component: BlogsdetailsComponent, canActivate: [AuthGuard] },
  { path: 'editblog/:postId', component: EditblogsComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
