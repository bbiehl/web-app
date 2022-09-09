import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeOverviewModule } from '../episode/episode-overview/episode-overview.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [CommonModule, EpisodeOverviewModule],
})
export class HomePageModule {}
