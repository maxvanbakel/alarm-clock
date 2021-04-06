export enum AlarmState {
    editing = 'editing',
    waiting = 'waiting',
    snoozing = 'snoozing',
    alarming = 'alarming',
    stopped = 'stopped',
    disabled = 'disabled'
}

/**
 * @Param Alarm Class sets a label, time, repeater in week days or snooze. 
 */
export class Alarm {

    public label: String = 'Nieuw Alarm';
    public time: Date = new Date();
    public repeat: Boolean = false;
    public days: any = [false, false, false, false, false, false, false];
    public snooze: number = 3;
    public state: AlarmState = AlarmState.editing;
    public snoozeTime: Date = this.time;     

    /**
     * 
     * @returns true if the alarm.state is not disabled.
     */
    public isEnabled(): boolean{
        if ( this.state === AlarmState.disabled){
            return false
        }
        return true
    }

    /**
     * 
     * @param day of the week wil be checked.
     * @returns 
     */
    public checkAlarmDay( day: number ): Boolean {
        if( this.repeat )
        {
            return this.days[day];
        }
        return true;
    }

    /**
     * 
     * @param time first date object
     * @param dateToCheck second date object
     * @returns true if hours and minutes are the same and clock is eneabled. 
     */
    public checkSetTime( time: Date, dateToCheck: Date ): Boolean {
        if( dateToCheck.getHours() == time.getHours() && 
            this.isEnabled() && 
            dateToCheck.getMinutes() == time.getMinutes() )
        {
            return true
        }
        return false;
    }
   

    /**
     *  Check if the alarm can be alarmed in snoozing state
     * @param time is used to check the snoozetime
     * @returns 
     */
    private isAlarmSnoozeAlarming(time: Date): boolean {
        if( this.state === AlarmState.snoozing && 
            this.isEnabled() && this.checkSetTime( this.snoozeTime, time ) )
            {
                return true   
            }
        return false
    }

    /**
     * Check if the alarm can be alarmed in waiting state
     * @param time is used to check the alarmTime
     * @returns 
     */
    private isAlarmAlarming(time: Date): boolean {
        if( this.state === AlarmState.waiting && 
            this.checkSetTime( this.time, time )   )
            {
                return true
            }
            return false
    }

    /**
     * Set new snooze time for the alarm
     */
    public setAlarmSnooze ( ): void {
        let m = Number(new Date().getMinutes()) + Number(this.snooze);
        this.snoozeTime.setMinutes( m )
        this.state = AlarmState.snoozing
    }

    /**
     * Stops the alarm if not repeated
     */
    public stopAlarm(): void {
        this.state = AlarmState.stopped;
        if( this.repeat ){
            setTimeout(() => {
                this.state = AlarmState.waiting
            }, 1000)
        }
    }

    /**
     * This makes the alarm go off at the appropiate time and within the appropiate state.
     * @param time 
     */
    public setAlarmState( time:any ): void{
        
        if( this.checkAlarmDay( time.getDay() ) &&
            this.isAlarmSnoozeAlarming( time ) || 
            this.isAlarmAlarming( time ) )
            {
                this.state = AlarmState.alarming;
            }
    }
}
