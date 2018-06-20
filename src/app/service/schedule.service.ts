import { Injectable } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';
import { Observable } from 'rxjs/Rx';
import { ExtractTopK } from '../utils/entries.util';
import { ScheduleEntry } from '../model/ScheduleEntry.model';
import { GoogleOAuthService } from './google-o-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  sheetname = "schedule";

  public getSheet() {
    return this.googleSheetService.load(this.sheetname)
  }

  public getLatestEntries(limit: number = 0):Observable<any> {
    return Observable.create(observer => {
      this.getSheet().subscribe(response => {
        const latestEntries = this.sortEntries(<ScheduleEntry[]>ExtractTopK(response.values, limit, ScheduleEntry.FromSheet))
        observer.next(latestEntries);
        observer.complete();
      })
    });
  }

  sortEntries(entries: ScheduleEntry[]) {
    entries.sort((a, b) => {
      if (+a.getDay() < +b.getDay() ||
        +a.getDay() === +b.getDay() && +a.getStartTime() < +b.getStartTime()) {
        return -1;
      } 
      return 1;
    })
    return entries;
  }

  public appendSheet(schedule: ScheduleEntry):Observable<any> {
    return this.googleSheetService.append(
      this.sheetname, 
      [schedule.toSheet()], 
      this.googleOAuthService.getAccessToken()
    );
  }

  constructor(
    public googleSheetService:GooglesheetService,
    public googleOAuthService:GoogleOAuthService
  ) { }
}
