import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorldMapPageComponent } from './world-map-page/world-map-page.component';
import { CardLibraryPageComponent } from './card-library-page/card-library-page.component';
import { RoadmapPageComponent } from './roadmap-page/roadmap-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    WorldMapPageComponent,
    CardLibraryPageComponent,
    RoadmapPageComponent,
    AboutPageComponent,
    LoginComponent,
    FooterComponent,
    CharactersPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
