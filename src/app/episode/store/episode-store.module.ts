import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EpisodeEffects } from './episode.effects';
import { EpisodeFeatureKey, episodeReducer } from './episode.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([EpisodeEffects]),
        StoreModule.forFeature(EpisodeFeatureKey, episodeReducer),
    ],
})
export class EpisodeStoreModule {}
