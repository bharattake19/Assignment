import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {   
  queryString:any;
  fragmentValue:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.snapshot.queryParams.allowEdit);
    this.queryString=this.route.snapshot.queryParams;
    this.fragmentValue=this.route.snapshot.fragment;

    //If any odify that values not reflected in snapshot so you need to modify
    console.log(this.route.queryParams.subscribe());
    console.log(this.route.fragment.subscribe());
  }
}
