import { AfterViewInit, Component } from '@angular/core';
import { Tooltip } from 'bootstrap';
@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
  standalone: false,
})
export class CharactersPageComponent implements AfterViewInit {
  development: boolean = false;
  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));
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
