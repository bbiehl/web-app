import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EpisodeSummaryComponent } from './episode-summary.component';

@NgModule({
    declarations: [EpisodeSummaryComponent],
    exports: [EpisodeSummaryComponent],
    imports: [CommonModule, FlexLayoutModule, MaterialModule],
})
export class EpisodeSummaryModule {}
