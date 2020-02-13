import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentModule } from './student/student.module';
import { CoursesModule } from './courses/courses.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms'; 
import { BasicHighLightDirective } from './basic-highlight/basic-highlight-directive';
import { WelcomePipe } from './home/WelcomePipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicHighLightDirective,
    WelcomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
