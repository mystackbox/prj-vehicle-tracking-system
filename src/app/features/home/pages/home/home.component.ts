import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToContactUs() {
    this.router.navigate(['/contact']);
  }

  redirectToServices() {
    this.router.navigate(['/services']);
  }
}
