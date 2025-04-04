import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Close menu whenever a new route finishes loading
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenuIfOpen();
      }
    });
  }

  openLoginModal() {
    this.loginService.openModal();
  }

  /**
   * Listen for clicks on the entire document.
   * If the menu is open and the click is outside the .navbar-collapse
   * and outside the .navbar-toggler, close the menu.
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = document.getElementById('navbarTogglerDemo02');
    const toggler = document.querySelector('.navbar-toggler');

    // Check if the menu is currently open (Bootstrap adds the "show" class)
    if (menu?.classList.contains('show')) {
      const target = event.target as HTMLElement;
      // If click is NOT inside the menu and NOT on the toggler button
      if (!menu.contains(target) && !toggler?.contains(target)) {
        this.toggleMenu(); // close it
      }
    }
  }

  /**
   * Closes the menu if it's open by simulating a click on the .navbar-toggler
   */
  private closeMenuIfOpen(): void {
    const menu = document.getElementById('navbarTogglerDemo02');
    if (menu?.classList.contains('show')) {
      this.toggleMenu();
    }
  }

  /**
   * Triggers the same toggle event Bootstrap uses to open/close the menu
   */
  private toggleMenu(): void {
    document
      .querySelector('.navbar-toggler')
      ?.dispatchEvent(new Event('click'));
  }
}
