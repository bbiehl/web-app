import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpisodeOverviewModule } from '../episode/episode-overview/episode-overview.module';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [CommonModule, EpisodeOverviewModule, MaterialModule, RouterModule],
})
export class HomePageModule {}
