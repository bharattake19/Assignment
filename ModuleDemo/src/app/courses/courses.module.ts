import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './CourseRoutingModule';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule,CourseRoutingModule,SharedModule]
})
export class CoursesModule {
  constructor(){
    console.log('Course Constructor')
  }
 }
