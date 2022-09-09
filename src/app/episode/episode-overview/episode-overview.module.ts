import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeOverviewComponent } from './episode-overview.component';

@NgModule({
    declarations: [EpisodeOverviewComponent],
    exports: [EpisodeOverviewComponent],
    imports: [CommonModule],
})
export class EpisodeOverviewModule {}
