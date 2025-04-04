import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: false,
})
export class HomePageComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach((t) => observer.observe(t));
  }
}
