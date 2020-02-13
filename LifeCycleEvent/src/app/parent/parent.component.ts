import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title: string = 'TestAngularApp1'; counter: number = 1
  arbitraryData: string = 'initial';
  Increment() {
    this.counter++;
  }

  Decrement() {
    this.counter--;
  }
  constructor() {
    setTimeout(
      () => {
        this.arbitraryData = 'final';
      }, 5000);
  }

  ngOnInit() {
  }
//ngDoCheck 
}
