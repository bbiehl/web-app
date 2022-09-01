import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { episodeFeatureReducer } from './episode.reducer';

@NgModule({
    declarations: [],
    imports: [CommonModule, EffectsModule.forFeature([]), StoreModule.forFeature('episode', episodeFeatureReducer)],
})
export class EpisodeStoreModule {}
