import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeDetailModule } from './episode-detail/episode-detail.module';
import { EpisodeOverviewModule } from './episode-overview/episode-overview.module';
import { EpisodeSummaryModule } from './episode-summary/episode-summary.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, EpisodeDetailModule, EpisodeOverviewModule, EpisodeSummaryModule],
})
export class EpisodeModule {}
