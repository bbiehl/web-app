import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeAddContainerModule } from '../../container-components/episode-add-container/episode-add-container.module';
import { EpisodeFormModule } from '../episode-form/episode-form.module';
import { EpisodeListComponent } from './episode-list.component';

@NgModule({
    declarations: [EpisodeListComponent],
    exports: [EpisodeListComponent],
    imports: [CommonModule, EpisodeAddContainerModule, EpisodeFormModule, FlexLayoutModule, MaterialModule],
})
export class EpisodeListModule {}
