import { Component } from '@angular/core'; 
import { Customer } from './customer'; 
@Component({ 
  selector: 'app-customerlist', 
  templateUrl: './customer-list.component.html' 
}) 
export class CustomerListComponent 
{ 
  customers: Customer[] = [ 
    {customerId: 1, name: 'David', address: 'S.R. Nagar', city: 'Hyderabad', state: 'Telangana', country: 'India'}, 
    {customerId: 2, name: 'Smith', address: 'Andheri', city: 'Mumbai', state: 'Maharastra', country: 'India'}, 
    {customerId: 3, name: 'Fleming', address: 'B.R. Nagar', city: 'Kolkata', state: 'West Bengal', country: 'India'}, 
    {customerId: 4, name: 'Martin', address: 'Manas Nagar', city: 'Patna', state: 'Bihar', country: 'India'}, 
    {customerId: 5, name: 'Peter', address: 'Chandni Chowk', city: 'Delhi', state: 'Delhi', country: 'India'} 
  ] 
}