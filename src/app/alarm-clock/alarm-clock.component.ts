import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.scss']
})
export class AlarmClockComponent implements OnInit {

  public now: Date = new Date();

  constructor() { 
    setInterval(()=>{
      this.now = new Date();
    }, 1)
  }

  ngOnInit(): void {
  }

}
