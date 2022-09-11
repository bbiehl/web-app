import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EpisodeEffects } from './episode.effects';
import { episodeFeatureReducer } from './episode.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([EpisodeEffects]),
        StoreModule.forFeature('episodes', episodeFeatureReducer),
    ],
})
export class EpisodeStoreModule {}
