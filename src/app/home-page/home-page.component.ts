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
    // Animate fade-in on scroll
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
    document
      .querySelectorAll('.animate-on-scroll')
      .forEach((el) => fadeObserver.observe(el));

    // Lazy load background images
    const bgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const bgUrl = el.getAttribute('data-bg');
          if (bgUrl) {
            el.style.background = `url('${bgUrl}') center/cover no-repeat`;
            el.removeAttribute('data-bg');
          }
          observer.unobserve(el);
        }
      });
    });
    document
      .querySelectorAll<HTMLElement>('.lazy-bg')
      .forEach((el) => bgObserver.observe(el));

    // Lazy load images
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc) {
            img.src = dataSrc;
            img.removeAttribute('data-src');
            img.classList.remove('lazy-img');
          }
          observer.unobserve(img);
        }
      });
    });
    document
      .querySelectorAll<HTMLImageElement>('img.lazy-img')
      .forEach((img) => imgObserver.observe(img));

    // ✅ Lazy load video sources
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const source = entry.target as HTMLSourceElement;
          const dataSrc = source.getAttribute('data-src');
          if (dataSrc) {
            source.src = dataSrc;
            source.removeAttribute('data-src');

            const video = source.parentElement as HTMLVideoElement;
            if (video) {
              video.load();
            }
          }
          observer.unobserve(source);
        }
      });
    });
    document
      .querySelectorAll<HTMLSourceElement>('video source[data-src]')
      .forEach((source) => videoObserver.observe(source));
  }
}
