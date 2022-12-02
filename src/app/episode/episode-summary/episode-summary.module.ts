import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeSummaryComponent } from './episode-summary.component';

@NgModule({
    declarations: [EpisodeSummaryComponent],
    exports: [EpisodeSummaryComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatBadgeModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterModule,
    ],
})
export class EpisodeSummaryModule {}
