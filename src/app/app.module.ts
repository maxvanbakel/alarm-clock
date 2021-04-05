import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
import { AlarmComponent } from './alarm/alarm.component';
import { SetAlarmComponent } from './set-alarm/set-alarm.component';
import { AlarmingComponent } from './alarming/alarming.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmClockComponent,
    AlarmComponent,
    SetAlarmComponent,
    AlarmingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
