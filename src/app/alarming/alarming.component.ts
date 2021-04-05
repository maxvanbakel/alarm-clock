import { Component, Input, OnInit } from '@angular/core';
import { Alarm, AlarmState } from '../alarm';

@Component({
  selector: 'app-alarming',
  templateUrl: './alarming.component.html',
  styleUrls: ['./alarming.component.scss']
})
export class AlarmingComponent implements OnInit {

  @Input() alarm: Alarm = new Alarm();
  public snoozeTime:number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  stopAlarm(){
    this.alarm.state = this.alarm.repeat ? AlarmState.waiting : AlarmState.stopped;
  }
  snoozeAlarm() {
    this.alarm.isSnoozed = true;
    this.alarm.setAlarmSnooze( new Date() );
  }
  changeSnoozeTime( e:any ){
    this.alarm.snooze = e.target.value
    this.snoozeTime = e.target.value
  }
}
