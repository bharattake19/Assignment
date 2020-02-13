import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  ngOnInit() {
  }
  lifecycleTicks: number = 0; oldTheData: string; data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection  
    setTimeout(() => {
      this.oldTheData = 'final';
      this.data.push('intermediate');
    }, 3000);
    setTimeout(() => {
      this.data.push('final');
    }, 6000);
  }

  ngDoCheck() {
    console.log(this.lifecycleTicks++);
    if (this.data[this.data.length - 1] !== this.oldTheData) { this.changeDetector.detectChanges(); }
  }
}
