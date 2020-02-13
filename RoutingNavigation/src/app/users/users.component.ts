import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  preserveWhitespaces:true
})
export class UsersComponent implements OnInit {
  userId:number=101;
  userName:string='Nilesh';
paramSubscription:Subscription
  user: { id: number, name: string };
  users = [
    {
      id: 100,
      name: "Bharat"
    },
    {
      id: 200,
      name: "Amit"
    },
    {
      id: 300,
      name: "Sham"
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['Id'],
      name: this.route.snapshot.params['Name']
    }
    //Change in route Parameter and If URL is update but model not update then you need to do manully async call.
    //subscribe param using route module
    this.paramSubscription=this.route.params.subscribe(
      (param:Params)=>{
        this.user.id=param['Id']
        this.user.name=param['Name']
      }
    )
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}
