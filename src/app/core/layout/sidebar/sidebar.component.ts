import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  currentRoute = '';
  subscriptions: Subscription[] = [];
  isExpandedSidebar = false;
  sideMenuItems = [
    {
      route: '/sobre-mim',
      label: 'Sobre mim',
    },
    {
      route: '/curriculum-vitae',
      label: 'CV',
    },
  ];

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  getCurrentRoute() {
    this.subscriptions.push(
      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe((route: NavigationEnd) => {
          this.currentRoute = route.url;
        })
    );
  }

  expandSidebar() {
    debugger;
    this.isExpandedSidebar = !this.isExpandedSidebar;
  }
}
