import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoTitle1 = 'veni';
  logoTitle2 = 'vidi';
  logoTitle3 = 'vici';
  isInDarkMode = false;
  subscriptions: Subscription[] = [];
  currentRoute = '';

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngOnInit(): void {}

  toggleDarkMode() {
    this.isInDarkMode = !this.isInDarkMode;
    this.isInDarkMode
      ? (this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
          '#23232e')
      : (this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
          '#ffff');
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}
