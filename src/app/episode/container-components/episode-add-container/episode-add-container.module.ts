import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeFormModule } from '../../display-components/episode-form/episode-form.module';
import { EpisodeViewModule } from '../../display-components/episode-view/episode-view.module';
import { EpisodeAddContainerComponent } from './episode-add-container.component';

@NgModule({
    declarations: [EpisodeAddContainerComponent],
    exports: [EpisodeAddContainerComponent],
    imports: [CommonModule, EpisodeFormModule, EpisodeViewModule, FlexLayoutModule, MaterialModule],
})
export class EpisodeAddContainerModule {}
