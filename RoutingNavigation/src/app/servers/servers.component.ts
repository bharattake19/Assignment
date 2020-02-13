import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [{
    id: 10,
    serverName: "QA Server",
    isActive: true
  },
  {
    id: 11,
    serverName: "UAT Server",
    isActive: true
  }, {
    id: 12,
    serverName: "Dev Server",
    isActive: true
  },
  {
    id: 13,
    serverName: "Prod Server",
    isActive: true
  }]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  reloadPage() {
    this.router.navigate(['serves'], { relativeTo: this.route })
  }
}
