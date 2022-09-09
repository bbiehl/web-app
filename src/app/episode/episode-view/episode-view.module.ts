import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodeViewComponent } from './episode-view.component';

@NgModule({
    declarations: [EpisodeViewComponent],
    exports: [EpisodeViewComponent],
    imports: [CommonModule],
})
export class EpisodeViewModule {}
