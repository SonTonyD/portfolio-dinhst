import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  email: any = 'sontony.dinh@gmail.com';
  emailCopied: boolean = false;

  constructor(private router: Router) {}

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  copyEmail(): void {
    navigator.clipboard
      .writeText(this.email)
      .then(() => {
        this.emailCopied = true;
        setTimeout(() => {
          this.emailCopied = false;
        }, 2000);
      })
      .catch((err) => {
        console.error('Erreur de copie dans le presse-papier :', err);
      });
  }
}
