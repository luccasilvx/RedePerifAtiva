import { Routes } from '@angular/router';
import { VolunterComponent } from './pages/volunter/volunter.component';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeComponent } from './pages/who-we/who-we.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { CronicsComponent } from './pages/cronics/cronics.component';
import { VoluntariesComponent } from './pages/voluntaries/voluntaries.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'voluntary', component: VolunterComponent},
  {path: 'quem-somos', component: WhoWeComponent},
  {path: 'actions', component: ActionsComponent},
  {path: 'cronics', component: CronicsComponent},
  {path: 'voluntaries', component: VoluntariesComponent}
];
