import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './pages/camper/announcements/announcements.component';
import { ScheduleComponent } from './pages/camper/schedule/schedule.component';
import { CamperInfoComponent } from './pages/camper/camper-info/camper-info.component';
import { FeedbackComponent } from './pages/camper/feedback/feedback.component';
import { TestimonyComponent } from './pages/camper/testimony/testimony.component';
import { AnnouncementsAdminComponent } from './pages/admin/announcements-admin/announcements-admin.component';
import { ScheduleAdminComponent } from './pages/admin/schedule-admin/schedule-admin.component';
import { CamperInfoAdminComponent } from './pages/admin/camper-info-admin/camper-info-admin.component';
import { FeedbackAdminComponent } from './pages/admin/feedback-admin/feedback-admin.component';
import { TestimonyAdminComponent } from './pages/admin/testimony-admin/testimony-admin.component';
import { HomeComponent } from './pages/camper/home/home.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';

import { ScheduleTableComponent } from './component/schedule-table/schedule-table.component';
import { ScheduleCountdownComponent } from './pages/camper/schedule/schedule-countdown/schedule-countdown.component';
import { RedirectAdminComponent } from './pages/admin/redirect-admin/redirect-admin.component';
import { ScheduleCreateComponent } from './pages/admin/schedule-admin/schedule-create/schedule-create.component';

// Material Modules
import { GestureConfig } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    ScheduleComponent,
    CamperInfoComponent,
    FeedbackComponent,
    TestimonyComponent,
    AnnouncementsAdminComponent,
    ScheduleAdminComponent,
    CamperInfoAdminComponent,
    FeedbackAdminComponent,
    TestimonyAdminComponent,
    HomeComponent,
    HomeAdminComponent,
    LoginAdminComponent,
    RedirectAdminComponent,
    ScheduleCountdownComponent,
    ScheduleTableComponent,
    ScheduleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Import HttpClientModule
    HttpClientModule,
    FormsModule,

    // Material Modules
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule

  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
  ],
  entryComponents: [
    ScheduleCreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
