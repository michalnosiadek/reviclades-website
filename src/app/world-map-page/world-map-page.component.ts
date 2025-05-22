import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-world-map-page',
  templateUrl: './world-map-page.component.html',
  styleUrls: ['./world-map-page.component.css'],
  standalone: false,
})
export class WorldMapPageComponent {
  markers: any[] = [];
  isMobile = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));

    this.http.get<any[]>('assets/data/factions.json').subscribe((data) => {
      this.markers = data;
    });

    this.http.get<any[]>('assets/data/factions.json').subscribe((data) => {
      this.markers = data;
    });
  }

  ngAfterViewInit() {
    const modalEl = document.getElementById('factionModal');

    if (modalEl) {
      modalEl.addEventListener('hidden.bs.modal', () => {
        const offcanvasEl = document.getElementById('kingdomInfo');
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
        bsOffcanvas.show();
      });
    }
  }
  highlightedNation: string | null = null;

  highlightNation(nation: string) {
    this.highlightedNation = nation;

    const path = document.querySelector(`.nation-border.${nation}`);
    if (path) {
      path.classList.add('hovered');
    }
  }

  unhighlightNation() {
    if (this.highlightedNation) {
      const path = document.querySelector(
        `.nation-border.${this.highlightedNation}`
      );
      if (path) {
        path.classList.remove('hovered');
      }
      this.highlightedNation = null;
    }
  }

  selectedMarker: any = null;
  overlayVisible = false;

  showOverlay() {
    this.overlayVisible = true;
  }

  hideOverlay() {
    this.overlayVisible = false;
  }

  onMarkerClick(name: string) {
    alert(`You clicked on: ${name}`);
  }
  openModal() {
    const offcanvasEl = document.getElementById('kingdomInfo');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    bsOffcanvas.hide();

    const modalEl = document.getElementById('factionModal');
    const bsModal = new bootstrap.Modal(modalEl);

    // Delay to ensure offcanvas fully closes before modal opens
    setTimeout(() => {
      bsModal.show();
    }, 400);
  }

  selectMarker(marker: any) {
    this.selectedMarker = marker;

    const offcanvasElement = document.getElementById('kingdomInfo');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    bsOffcanvas.show();
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
  generateSlug(faction: string): string {
    return '/factions/' + faction.toLowerCase().replace(/\s+/g, '-');
  }
}
