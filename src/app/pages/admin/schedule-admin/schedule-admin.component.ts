import { Component, OnInit } from '@angular/core';
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';
import { ScheduleService } from '../../../service/schedule.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleCreateComponent } from "./schedule-create/schedule-create.component"

@Component({
  selector: 'app-schedule-admin',
  templateUrl: './schedule-admin.component.html',
  styleUrls: ['./schedule-admin.component.scss']
})
export class ScheduleAdminComponent implements OnInit {

  dataSource: ScheduleEntry[];

  constructor(
    private scheduleService: ScheduleService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchSchedule();
  }

  fetchSchedule() {
    this.scheduleService.getLatestEntries().subscribe(response => {
      this.dataSource = response;
    })
  }

  openCreate($event) {
    const entry = ($event) 
                ? $event
                : (this.dataSource.length > 0) 
                  ? new ScheduleEntry(
                      this.dataSource[this.dataSource.length - 1].getId() + 1)
                  : new ScheduleEntry(1);

    let dialogRef = this.dialog.open(ScheduleCreateComponent, {
      width: '95%',
      data: { entry }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.scheduleService.appendSheet(result).subscribe(response => {
          if (!response.error) {
            this.fetchSchedule();
          }
        });
      }
    });
  }

  onEdit($event: ScheduleEntry) {
    this.openCreate($event);
  }

  onDelete($event: ScheduleEntry) {
    $event.delete();
    this.scheduleService.appendSheet($event).subscribe(response => {
      if (!response.error) {
        this.fetchSchedule();
      }
    })
  }

}
