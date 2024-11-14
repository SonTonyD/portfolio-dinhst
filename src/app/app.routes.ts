import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecentWorkViverisComponent } from './recent-work-viveris/recent-work-viveris.component';

export const routes: Routes = [
  { path: 'viveris', component: RecentWorkViverisComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
