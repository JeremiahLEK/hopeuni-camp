import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ScheduleEntry } from '../../../../model/ScheduleEntry.model';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.scss']
})
export class ScheduleCreateComponent implements OnInit {

	message: string;
	description: string;
	info: string;
	day: number;
	startTime: number;
	endTime: number;

  constructor(
  	public dialogRef: MatDialogRef<ScheduleCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.description = this.data.entry.getDescription();
    this.info = this.data.entry.getInfo();
    this.day = this.data.entry.getDay();
    this.startTime = this.data.entry.getStartTime();
    this.endTime = this.data.entry.getEndTime();
  }

  createSchedule($event, form) {
  	if (this.description == null || this.day == null
  			|| this.startTime == null || this.endTime == null) {
  		this.message = "All Fields are required!";
  	} else if (this.startTime < 0 || this.startTime > 2358) {
  		this.message = "Start Time must be between 0 - 2358"
  	} else if (this.endTime < this.startTime || this.endTime > 2359) {
  		this.message = "End Time must be between start time - 2359"
  	} else {
  		console.log("close!");
  		this.data.entry.setDescription(this.description);
  		this.data.entry.setInfo(this.info || '');
  		this.data.entry.setDay(this.day);
  		this.data.entry.setStartTime(this.startTime);
  		this.data.entry.setEndTime(this.endTime);
	  	this.dialogRef.close(this.data.entry);  		
  	}


  }

}
