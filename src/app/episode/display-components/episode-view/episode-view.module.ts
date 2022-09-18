import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeViewComponent } from './episode-view.component';

@NgModule({
    declarations: [EpisodeViewComponent],
    exports: [EpisodeViewComponent],
    imports: [CommonModule],
})
export class EpisodeViewModule {}
