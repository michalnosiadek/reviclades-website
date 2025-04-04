import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-card-library-page',
    templateUrl: './card-library-page.component.html',
    styleUrls: ['./card-library-page.component.css'],
    standalone: false
})
export class CardLibraryPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    // Ensure bootstrap is available globally
    tooltipTriggerList.forEach(
      (el) => new (window as any).bootstrap.Tooltip(el)
    );
  }
}
