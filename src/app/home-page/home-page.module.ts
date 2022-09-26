import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EpisodeListModule } from '../episode/display-components/episode-list/episode-list.module';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    imports: [CommonModule, EpisodeListModule, FlexLayoutModule, MaterialModule],
})
export class HomePageModule {}
