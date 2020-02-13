import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer/customer';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input('CustomerList') public custs: any;
  @Output() public childEvent = new EventEmitter();

  customers: Customer[] = [ 
    {customerId: 10, name: 'Child 1', address: 'S.R. Nagar', city: 'Hyderabad', state: 'Telangana', country: 'India'}, 
    {customerId: 20, name: 'Child 2', address: 'Andheri', city: 'Mumbai', state: 'Maharastra', country: 'India'}, 
    {customerId: 30, name: 'Child 3', address: 'B.R. Nagar', city: 'Kolkata', state: 'West Bengal', country: 'India'}, 
    {customerId: 40, name: 'Child 4', address: 'Manas Nagar', city: 'Patna', state: 'Bihar', country: 'India'}, 
    {customerId: 50, name: 'Child 5', address: 'Chandni Chowk', city: 'Delhi', state: 'Delhi', country: 'India'} 
  ] 
  
  constructor() { }

  ngOnInit() {
  }
  SendToParent() {
    this.childEvent.emit(this.customers);
  }
}
