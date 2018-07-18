import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/camper/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ScheduleFullComponent } from "./pages/camper/schedule/schedule-full/schedule-full.component";
import { CamperInfoComponent } from "./pages/camper/camper-info/camper-info.component";
import { RedirectComponent } from "./pages/camper/redirect/redirect.component";
import { CampInfoComponent } from './pages/camper/campinfo/campinfo.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, 
	{
		path: 'schedule',
		component: ScheduleFullComponent
	},
	{
		path: 'camper',
		component: CamperInfoComponent
	},
	{
		path: 'redirect',
		component: RedirectComponent
	},
	{
		path: 'campinfo',
		component: CampInfoComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
