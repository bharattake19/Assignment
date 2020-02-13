import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
@NgModule({
  declarations: [TestDirective],
  imports: [
    CommonModule
  ], exports: [ 
    TestDirective,
  ]
})
export class SharedModule { }
