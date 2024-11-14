import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecentWorkSmileComponent } from './recent-work-smile/recent-work-smile.component';
import { RecentWorkViverisComponent } from './recent-work-viveris/recent-work-viveris.component';

export const routes: Routes = [
  { path: 'smile', component: RecentWorkSmileComponent },
  { path: 'viveris', component: RecentWorkViverisComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
