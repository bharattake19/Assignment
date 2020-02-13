import { Component, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {

  constructor() { }

  CallMethod() {
    console.log("Call Method");
  }
  ngOnInit() {
    console.log("ngOnInit Calles");
  }
  ngOnChanges(){
    console.log("ngOnChanges Calles");
  }
}
