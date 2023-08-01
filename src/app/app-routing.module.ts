import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WorldMapPageComponent } from './world-map-page/world-map-page.component';
import { CardLibraryPageComponent } from './card-library-page/card-library-page.component';
import { RoadmapPageComponent } from './roadmap-page/roadmap-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'world-map', component: WorldMapPageComponent },
  { path: 'card-library', component: CardLibraryPageComponent },
  { path: 'roadmap', component: RoadmapPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
