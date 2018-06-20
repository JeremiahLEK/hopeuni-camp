import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScheduleService } from "../../../service/schedule.service";
import { interval } from "rxjs"
import { ScheduleCountdownComponent } from './schedule-countdown/schedule-countdown.component';
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements AfterViewInit {

  displayLoader: boolean = true;
  header: any;
  dataSource: ScheduleEntry[];
  entries: ScheduleEntry[];

  @ViewChild(ScheduleCountdownComponent) countdown;

  constructor(
    public schService:ScheduleService
  ) { }

  ngAfterViewInit() {
    this.schService.getLatestEntries().subscribe(response => {
      this.entries = response;
      this.dataSource = this.entries;
      this.onExpired(null);
      this.displayLoader = false;
    })
  }

  onExpired($event) {
    if (this.entries) {
      if ($event == this.entries[0] && this.entries.length > 1) {
        this.entries.shift();
        this.countdown.start(this.entries[0]);
      } else if (this.entries.length > 1) {
        this.countdown.start(this.entries[0]);
      } else {
        this.countdown.start();
      }
    }
  }



}
