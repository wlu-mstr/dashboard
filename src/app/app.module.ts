import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TabsModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SysComponent } from './sys/sys.component';
import { SysMonitorComponent } from './sys/sys-monitor/sys-monitor.component';
import { EChartOptionDirective1 } from './sys/sys-monitor/echart-option.directive';
import { PlatformComponent } from './sys/platform/platform.component';

@NgModule({
  declarations: [
    EChartOptionDirective1,
    SysComponent,
    SysMonitorComponent,
    AppComponent,
    PlatformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
