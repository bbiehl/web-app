import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeDetailComponent } from './episode-detail.component';

@NgModule({
    declarations: [EpisodeDetailComponent],
    exports: [EpisodeDetailComponent],
    imports: [CommonModule, FlexLayoutModule, MaterialModule, RouterModule],
})
export class EpisodeDetailModule {}
