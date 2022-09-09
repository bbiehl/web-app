import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EpisodeOverviewModule } from '../episode/episode-overview/episode-overview.module';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [CommonModule, EpisodeOverviewModule, FlexLayoutModule, MaterialModule],
})
export class HomePageModule {}
