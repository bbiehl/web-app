import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeOverviewComponent } from './episode-overview.component';

@NgModule({
    declarations: [EpisodeOverviewComponent],
    exports: [EpisodeOverviewComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
})
export class EpisodeOverviewModule {}
