import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeAddContainerModule } from './container-components/episode-add-container/episode-add-container.module';
import { EpisodeListContainerModule } from './container-components/episode-page-container/episode-page-container.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, EpisodeAddContainerModule, EpisodeListContainerModule],
})
export class EpisodeModule {}
