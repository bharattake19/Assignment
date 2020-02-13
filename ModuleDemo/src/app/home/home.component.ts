import { Component, OnInit } from '@angular/core';
import {Address} from './Address';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string = "Welcome to Angular";
  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  cities: string[] = ["Select", "Hyderabad", "Banglore", "Mumbai"];
  constructor() { }
  tmpFlag: boolean = false;
  buttonMessage: string;
  hasError(error: boolean) {
    if (error == true)
      return true;
    else
      return false;
  }
  showAlertMessage(): any {
    this.buttonMessage = "Button Message";
  }
  hideAlertMessage(): any {
    this.buttonMessage = "";
  }
  selectedCity: string;
  getValue(value) {
    this.selectedCity = value;
  }
  ngOnInit() {
    // if (this.days['Sunday']) {
    //   this.tmpFlag = true;
    // }
  }
  //Event Bubling
  ButtonClick($event) {
    $event.stopPropagation(); // Stop Event Bubbling 
    console.log("Button is Clicked!!!");
  }
  DivClick() {
    console.log("Div is Clicked!!!");
  }

  //Two way data binding
  firstName:string="Bharat Take";

  //NgFor NgIf
  numbers=[1,2,3,4,5,6,7,8,9,10];
  evenNumbers=[2,4,6,8];
  oddNumbers=[1,3,5,7,9];
  onlyOdd:false;

  //InBuild Pipe
  testMessage:string="This is test message";

  currentDate = Date.now(); 
  num1: number = 12.638467846; 
  num2: number = 2.5;
  cur1: number = 0.25;   cur2: number = 10.263782;   cur3: number = 5500.56789; 
  address=new Address("Area","City","Country",);  
}
