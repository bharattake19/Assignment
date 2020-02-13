import { Component, OnInit,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['PData'],
  outputs:['childEvent'] 
})
export class ChildComponent implements OnInit {
  @Input('custsList') public customers: any;  
  ngOnInit() {
  }

}
