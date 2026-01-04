import { Routes } from '@angular/router';
import { VolunterComponent } from './pages/volunter/volunter.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'voluntary', component: VolunterComponent}
];
