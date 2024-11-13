import { Component } from '@angular/core';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecentWorksComponent } from './recent-works/recent-works.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    CaseStudiesComponent,
    RecentWorksComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
