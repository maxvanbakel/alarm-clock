import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Alarm } from "../alarm";

@Component({
  selector: 'app-alarm-clock',
  templateUrl: './alarm-clock.component.html',
  styleUrls: ['./alarm-clock.component.scss']
})
export class AlarmClockComponent implements OnInit {

  public now: Date = new Date();
  public alarm_id = 0;
  public days: any = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  
  public alarms: Alarm[] = [];
  public currentAlarm?: Alarm = undefined;
  public alarming?: Alarm = undefined;

  constructor() { 
    setInterval(()=>{
      this.now = new Date();
      this.checkTheAlarms()
    }, 1)
  }

  ngOnInit(): void {
  }

  createAlarm() {
    let a = new Alarm( )
    this.alarms.push( a ) 
    this.currentAlarm = a
  }

  removeAlarm( index:number ){

    if( this.alarms[index] === this.alarming ){
      this.alarming = undefined
    }
    if(this.alarms[index] === this.currentAlarm){
      this.currentAlarm = undefined;
    }
    
    this.alarms.splice( index, 1 )

  }

  checkTheAlarms(){
    for (let i = 0; i < this.alarms.length; i++) {
      const alarm = this.alarms[i];

      if( alarm.alarming( this.now ) ){
        this.alarming = alarm;
      }
    }
  }


}
