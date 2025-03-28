import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHomeRoute: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check initial route
    this.isHomeRoute = this.router.url === '/' || this.router.url === '/home';

    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = event.url === '/' || event.url === '/home';
      }
    });
  }
}
