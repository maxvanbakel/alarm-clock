export enum AlarmState {
    editing = 'editing',
    waiting = 'waiting',
    snoozing = 'snoozing',
    alarming = 'alarming',
    stopped = 'stopped'
}

export class Alarm {

    public label: String = 'Nieuw Alarm';
    public time: Date = new Date();
    public repeat: Boolean = false;
    public days: any = [false, false, false, false, false, false, false];
    public snooze: number = 3;
    public state: AlarmState = AlarmState.editing;
    public tempAlarmTime: Date = new Date();
    public enabled?: Boolean;
    public isSnoozed: Boolean = false;
    public snoozeTime: Date = this.time;     

    public checkAlarmDay( day: number ): Boolean {
        if( this.repeat )
        {
            return this.days[day];
        }
        return true;
    }

    public checkSetTime( time: Date, dateToCheck: Date ): Boolean {
        if( dateToCheck.getHours() == time.getHours() && 
        this.enabled && 
        dateToCheck.getMinutes() == time.getMinutes() )
        {

            this.tempAlarmTime = new Date( this.time.getTime() + (this.snooze * 1000 ) )
            return true
        }
        return false;
    }
   

    private isAlarmStopped(time: Date): void {
        if( this.state === AlarmState.stopped && 
            !this.checkSetTime( this.time, time ))
            {
                this.state = AlarmState.waiting
            }
    }

    private isAlarmSnoozed(time: Date): void {
        if( this.state === AlarmState.snoozing && 
            this.enabled && this.checkSetTime( this.snoozeTime, time ) && 
            this.checkAlarmDay( time.getDay() ) )
            {
                this.state = AlarmState.alarming;
            }
        
    }

    private isAlarmAlarming(time: Date): void {
        if( this.state !== AlarmState.alarming && 
            this.enabled && 
            this.checkSetTime( this.time, time ) && 
            this.checkAlarmDay( time.getDay() ) )
            {
                this.state = AlarmState.alarming;
            }
    }

    public setAlarmSnooze ( time: Date): void {
        let m = Number(time.getMinutes()) + Number(this.snooze);
        let snuz = new Date( time )
        snuz.setMinutes( m )
        this.snoozeTime = snuz
        this.isSnoozed = false
        this.state = AlarmState.snoozing
    }

/**
 * 
 * Opsplitsen in verschillende methodes. 
 */
    public alarming( time:any ): boolean{

        // this.setAlarmSnooze( time );
            
        this.isAlarmStopped( time );

        this.isAlarmSnoozed( time );

        this.isAlarmAlarming( time );

        return true;
    }

}
