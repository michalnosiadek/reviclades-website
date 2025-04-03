import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
})
export class CharactersPageComponent implements AfterViewInit {
  development: boolean = false;
  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    // Ensure bootstrap is available globally
    tooltipTriggerList.forEach(
      (el) => new (window as any).bootstrap.Tooltip(el)
    );
  }

  selectedTabs: { [characterId: string]: number } = {
    fireBerserker: 0,
    gorantulanHunter: 0,
    shrimpMonk: 0,
    batPriest: 0,
    cryptShambler: 0,
  };

  onTabChange(characterId: string, tabIndex: number): void {
    this.selectedTabs[characterId] = tabIndex;
  }
}
