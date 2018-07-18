import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './pages/camper/announcements/announcements.component';
import { ScheduleComponent } from './pages/camper/schedule/schedule.component';
import { CamperInfoComponent } from './pages/camper/camper-info/camper-info.component';
import { FeedbackComponent } from './pages/camper/feedback/feedback.component';
import { TestimonyComponent } from './pages/camper/testimony/testimony.component';
import { HomeComponent } from './pages/camper/home/home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './pages/camper/footer/footer.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CountdownComponent } from './pages/camper/countdown/countdown.component';
import { HeaderComponent } from './pages/camper/header/header.component';
import { CampInfoComponent } from './pages/camper/campinfo/campinfo.component';

// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material';
import { ScheduleFullComponent } from './pages/camper/schedule/schedule-full/schedule-full.component';
import { RedirectComponent } from './pages/camper/redirect/redirect.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    ScheduleComponent,
    CamperInfoComponent,
    FeedbackComponent,
    TestimonyComponent,
    HomeComponent,
    NotFoundComponent,
    CountdownComponent,
    FooterComponent,
    ScheduleFullComponent,
    RedirectComponent,
    HeaderComponent,
    CampInfoComponent,
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
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
