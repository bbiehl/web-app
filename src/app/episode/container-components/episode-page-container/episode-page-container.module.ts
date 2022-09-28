import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeListModule } from '../../display-components/episode-list/episode-list.module';
import { EpisodePageContainerComponent } from './episode-page-container.component';

@NgModule({
    declarations: [EpisodePageContainerComponent],
    exports: [EpisodePageContainerComponent],
    imports: [CommonModule, EpisodeListModule],
})
export class EpisodeListContainerModule {}
