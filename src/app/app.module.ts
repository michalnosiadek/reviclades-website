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
import { FactionsPageComponent } from './factions-page/factions-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FireBerserkerPageComponent } from './characters-page/characters/fire-berserker-page/fire-berserker-page.component';
import { GorantulanHunterPageComponent } from './characters-page/characters/gorantulan-hunter-page/gorantulan-hunter-page.component';
import { ShrimpMonkPageComponent } from './characters-page/characters/shrimp-monk-page/shrimp-monk-page.component';
import { BatPriestPageComponent } from './characters-page/characters/bat-priest-page/bat-priest-page.component';
import { CryptShamblerPageComponent } from './characters-page/characters/crypt-shambler-page/crypt-shambler-page.component';
import { CartographerPageComponent } from './characters-page/characters/cartographer-page/cartographer-page.component';

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
    FactionsPageComponent,
    NotFoundPageComponent,
    FireBerserkerPageComponent,
    GorantulanHunterPageComponent,
    ShrimpMonkPageComponent,
    BatPriestPageComponent,
    CryptShamblerPageComponent,
    CartographerPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
