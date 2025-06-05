import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-card-library-page',
  templateUrl: './card-library-page.component.html',
  styleUrls: ['./card-library-page.component.css'],
  standalone: false,
})
export class CardLibraryPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach(
      (el) => new (window as any).bootstrap.Tooltip(el)
    );

    // Lazy loading images
    const lazyImages =
      document.querySelectorAll<HTMLImageElement>('img.lazy-img');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
              img.classList.remove('lazy-img');
              obs.unobserve(img);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    lazyImages.forEach((img) => observer.observe(img));
  }
}
