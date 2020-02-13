import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  OnLoadServer(id:number) {
    //write your logic
    this.router.navigate(['/serves',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'})
  }
  ngOnInit() {
  }

}
