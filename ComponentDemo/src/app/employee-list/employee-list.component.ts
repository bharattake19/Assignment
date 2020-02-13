import { Component, OnInit } from '@angular/core';

class DemoProvider 
{   
  constructor() 
  {     
    console.log("Demo Provider Property");   
  }   
  VarDemoProvider = "VarDemoProvider"; 
} 

class TestProvider 
{   
  VarTestProvider = "VarTestProvider";   
  constructor() {   }   
  getString(name) 
  {     
    console.log("Test Provider Property: " + name);   
  } 
}

@Component({
  selector: 'div[app=app-employee-list]',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  viewProviders:[DemoProvider, TestProvider] 
})
export class EmployeeListComponent implements OnInit {
  message = "Hello, Welcome to the Employee List Section"; 
  constructor(public demo: DemoProvider, public test: TestProvider) 
  {     
    test.getString("Bharat Take");     
    console.log(demo.VarDemoProvider);     
    console.log(test.VarTestProvider);   
  }
  ngOnInit() {
  }
}
