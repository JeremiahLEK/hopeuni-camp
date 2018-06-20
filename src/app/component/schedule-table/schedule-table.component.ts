import { Output, Input, EventEmitter, Component, OnInit } from '@angular/core';
import { ScheduleEntry } from '../../model/ScheduleEntry.model';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit {

	@Input() dataSource: ScheduleEntry[];
	@Input() editable: boolean = false;
	@Output() edit = new EventEmitter<ScheduleEntry>();
	@Output() delete = new EventEmitter<ScheduleEntry>();

  displayedColumns = ['day', 'time', 'event', 'info'];

  constructor() { }

  ngOnInit() {
  	console.log("init");

  	if(this.editable) {
  		this.displayedColumns.push(...['edit', 'delete']);
  	}
  }

  padTime(time: number): string {
  	if (time < 10) {
  		return "000" + time;
  	} else if (time < 100) {
  		return "00" + time;
  	} else if (time < 1000) {
  		return "0" + time;
  	} else {
  		return String(time);
  	}
  }

  editOnClick($event, entry) {
  	this.edit.emit(entry);
  }

  deleteOnClick($event, entry) {
  	this.delete.emit(entry);
  }

}
