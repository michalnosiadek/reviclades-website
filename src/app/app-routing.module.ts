import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorldMapPageComponent } from './world-map-page/world-map-page.component';
import { CardLibraryPageComponent } from './card-library-page/card-library-page.component';
import { RoadmapPageComponent } from './roadmap-page/roadmap-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { FactionsPageComponent } from './factions-page/factions-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FireBerserkerPageComponent } from './characters-page/characters/fire-berserker-page/fire-berserker-page.component';
import { GorantulanHunterPageComponent } from './characters-page/characters/gorantulan-hunter-page/gorantulan-hunter-page.component';
import { ShrimpMonkPageComponent } from './characters-page/characters/shrimp-monk-page/shrimp-monk-page.component';
import { BatPriestPageComponent } from './characters-page/characters/bat-priest-page/bat-priest-page.component';
import { CryptShamblerPageComponent } from './characters-page/characters/crypt-shambler-page/crypt-shambler-page.component';
import { CartographerPageComponent } from './characters-page/characters/cartographer-page/cartographer-page.component';
import { FireFolkComponent } from './factions-page/factions/fire-folk/fire-folk.component';
import { WaterClanComponent } from './factions-page/factions/water-clan/water-clan.component';
import { EarthNationComponent } from './factions-page/factions/earth-nation/earth-nation.component';
import { AirKingdomComponent } from './factions-page/factions/air-kingdom/air-kingdom.component';
import { LightPilgrimsComponent } from './factions-page/factions/light-pilgrims/light-pilgrims.component';
import { DarkCultComponent } from './factions-page/factions/dark-cult/dark-cult.component';
import { GorantulandComponent } from './factions-page/factions/gorantuland/gorantuland.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'world-map', component: WorldMapPageComponent },
  { path: 'card-library', component: CardLibraryPageComponent },
  { path: 'roadmap', component: RoadmapPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'factions', component: FactionsPageComponent },
  { path: 'fire-berserker', component: FireBerserkerPageComponent },
  { path: 'gorantulan-hunter', component: GorantulanHunterPageComponent },
  { path: 'shrimp-monk', component: ShrimpMonkPageComponent },
  { path: 'bat-priest', component: BatPriestPageComponent },
  { path: 'crypt-shambler', component: CryptShamblerPageComponent },
  { path: 'cartographer', component: CartographerPageComponent },
  { path: 'fire-folk', component: FireFolkComponent },
  { path: 'water-clan', component: WaterClanComponent },
  { path: 'earth-nation', component: EarthNationComponent },
  { path: 'air-kingdom', component: AirKingdomComponent },
  { path: 'light-pilgrims', component: LightPilgrimsComponent },
  { path: 'dark-cult', component: DarkCultComponent },
  { path: 'gorantuland', component: GorantulandComponent },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
