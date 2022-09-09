import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeListComponent } from './episode-list.component';
import { EpisodeAddModule } from '../episode-add/episode-add.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
    declarations: [EpisodeListComponent],
    exports: [EpisodeListComponent],
    imports: [CommonModule, EpisodeAddModule, FlexLayoutModule, MaterialModule],
})
export class EpisodeListModule {}
