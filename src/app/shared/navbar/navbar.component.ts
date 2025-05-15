import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // Close menu whenever a new route finishes loading
    this.router.events.subscribe((event) => {
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
    const target = event.target as HTMLElement;

    if (
      menu?.classList.contains('show') &&
      !menu.contains(target) &&
      !toggler?.contains(target)
    ) {
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      bsCollapse?.hide();
    }
  }

  /**
   * Closes the menu if it's open by simulating a click on the .navbar-toggler
   */
  private closeMenuIfOpen(): void {
    const menu = document.getElementById('navbarTogglerDemo02');
    const bsCollapse = bootstrap.Collapse.getInstance(menu!);
    if (menu?.classList.contains('show') && bsCollapse) {
      bsCollapse.hide();
    }
  }

  /**
   * Triggers the same toggle event Bootstrap uses to open/close the menu
   */
  toggleMenu(): void {
    const menu = document.getElementById('navbarTogglerDemo02');
    if (!menu) return;

    let bsCollapse = bootstrap.Collapse.getInstance(menu);

    if (!bsCollapse) {
      // If no instance exists yet, create one
      bsCollapse = new bootstrap.Collapse(menu, {
        toggle: false,
      });
    }

    if (menu.classList.contains('show')) {
      bsCollapse.hide();
    } else {
      bsCollapse.show();
    }
  }
}
