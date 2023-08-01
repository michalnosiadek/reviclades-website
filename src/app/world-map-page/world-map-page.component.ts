import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-world-map-page',
  templateUrl: './world-map-page.component.html',
  styleUrls: ['./world-map-page.component.css'],
})
export class WorldMapPageComponent {
  @ViewChild('mySidebarLeft') mySidebarLeft!: ElementRef;
  @ViewChild('mySidebarRight') mySidebarRight!: ElementRef;
  @ViewChild('main') main!: ElementRef;

  constructor(private renderer: Renderer2) {}

  openNavLeft() {
    this.renderer.setStyle(this.mySidebarLeft.nativeElement, 'width', '450px');
    this.renderer.setStyle(
      this.main.nativeElement,
      'transform',
      'translateX(450px)'
    );
  }

  closeNavLeft() {
    this.renderer.setStyle(this.mySidebarLeft.nativeElement, 'width', '0');
    this.renderer.setStyle(
      this.main.nativeElement,
      'transform',
      'translateX(0)'
    );
  }

  openNavRight() {
    this.renderer.setStyle(this.mySidebarRight.nativeElement, 'width', '450px');
    this.renderer.setStyle(
      this.main.nativeElement,
      'transform',
      'translateX(-450px)'
    );
  }

  closeNavRight() {
    this.renderer.setStyle(this.mySidebarRight.nativeElement, 'width', '0');
    this.renderer.setStyle(
      this.main.nativeElement,
      'transform',
      'translateX(0)'
    );
  }

  onMapClick() {
    // logic to decide whether to open left or right nav
    // for example:
    // this.openNavLeft();
  }
}
