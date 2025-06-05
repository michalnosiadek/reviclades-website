import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
  standalone: false,
})
export class CharactersPageComponent implements AfterViewInit {
  development: boolean = false;

  selectedTabs: { [characterId: string]: number } = {
    fireBerserker: 0,
    gorantulanHunter: 0,
    shrimpMonk: 0,
    batPriest: 0,
    cryptShambler: 0,
  };

  ngAfterViewInit() {
    // Tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));

    // Lazy loading for videos
    const videos = document.querySelectorAll('video');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            const source = video.querySelector('source');
            if (source && source.getAttribute('data-src')) {
              source.setAttribute('src', source.getAttribute('data-src')!);
              source.removeAttribute('data-src');
              video.load(); // Triggers video loading
              obs.unobserve(video); // Optional: stop observing once loaded
            }
          }
        });
      },
      {
        threshold: 0.25, // Load when 25% of video is in view
      }
    );

    videos.forEach((video) => observer.observe(video));
  }

  onTabChange(characterId: string, tabIndex: number): void {
    this.selectedTabs[characterId] = tabIndex;
  }
}
