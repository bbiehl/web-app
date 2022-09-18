import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EpisodeFormComponent } from './episode-form.component';

@NgModule({
    declarations: [EpisodeFormComponent],
    exports: [EpisodeFormComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class EpisodeFormModule {}
