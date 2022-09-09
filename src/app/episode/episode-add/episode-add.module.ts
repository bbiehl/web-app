import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeFormModule } from '../episode-form/episode-form.module';
import { EpisodeViewModule } from '../episode-view/episode-view.module';
import { EpisodeAddComponent } from './episode-add.component';

@NgModule({
    declarations: [EpisodeAddComponent],
    imports: [CommonModule, EpisodeFormModule, EpisodeViewModule, FlexLayoutModule, MaterialModule],
})
export class EpisodeAddModule {}
