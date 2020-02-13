import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  Previous: any;
  Current: any;
  firstChange: any;
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit Call");
  }
  //@Input() count: number;
  private _count = 0;
  @Input()
  set count(count: number) {
    this._count = count;
    console.log(count);
  }
  get count(): number {
    return this._count;
  }
  @Input() data: string;
  lifecycleTicks: number = 0;
  ngOnChanges() {
    console.log("ngOnChanges");
    this.lifecycleTicks++;
  }

  // ngOnChanges(changes: SimpleChanges) {

  //   for (let property in changes) {
  //     if (property === 'count') {
  //       this.Previous = 'Previous:' + changes[property].previousValue;
  //       this.Current = 'Current:' + changes[property].currentValue;
  //       this.firstChange = 'firstChange:' + changes[property].firstChange;
  //     }
  //   }
  // }
}
