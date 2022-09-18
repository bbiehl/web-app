import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeListModule } from '../../display-components/episode-list/episode-list.module';
import { EpisodeListContainerComponent } from './episode-list-container.component';

@NgModule({
    declarations: [EpisodeListContainerComponent],
    exports: [EpisodeListContainerComponent],
    imports: [CommonModule, EpisodeListModule],
})
export class EpisodeListContainerModule {}
