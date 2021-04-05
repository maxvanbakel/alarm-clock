import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Alarm } from '../alarm';



@Component({
  selector: 'app-set-alarm',
  templateUrl: './set-alarm.component.html',
  styleUrls: ['./set-alarm.component.scss']
})
export class SetAlarmComponent implements OnInit {
  

  @Input() alarm: any;
  @Input() days: any;

  

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

 

}
