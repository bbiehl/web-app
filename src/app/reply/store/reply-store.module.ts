import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReplyEffects } from './reply.effects';
import { ReplyFeatureKey, replyReducer } from './reply.reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([ReplyEffects]),
        StoreModule.forFeature(ReplyFeatureKey, replyReducer),
    ],
})
export class ReplyStoreModule {}
