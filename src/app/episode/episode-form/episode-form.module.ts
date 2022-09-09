import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeFormComponent } from './episode-form.component';

@NgModule({
    declarations: [EpisodeFormComponent],
    exports: [EpisodeFormComponent],
    imports: [CommonModule],
})
export class EpisodeFormModule {}
