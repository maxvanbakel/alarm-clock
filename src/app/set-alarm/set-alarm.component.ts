import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Alarm, AlarmState } from '../alarm';



@Component({
  selector: 'app-set-alarm',
  templateUrl: './set-alarm.component.html',
  styleUrls: ['./set-alarm.component.scss']
})
export class SetAlarmComponent implements OnInit {
  

  @Input() alarms: Alarm[] = [];
  @Input() alarm: any;
  @Input() days: any;

  alarmStates?: AlarmState;
  

  constructor() { }

  ngOnInit(): void {
  }


  setLabel( l:any ) {

    this.alarm.label = l.target.value;

  }

  setHours( h:any ) {

    h = parseInt(h.target.value);

    this.alarm.time.setHours( h )
    
  }

  setMinutes( m:any ){

    m = parseInt(m.target.value);

    this.alarm.time.setMinutes( m )

  }

  setSnoozeTime( event:any ) {

    this.alarm.snooze = event.target.value

  }

  removeAlarm( index: number ){
    
    this.alarm.state = AlarmState.disabled;
    this.alarms.splice( index, 1 )

  }

  disableAlarm() {
    this.alarm.state = AlarmState.disabled;
  }
 
  saveAlarm(){
    this.alarm.state = AlarmState.waiting;
  }

}
