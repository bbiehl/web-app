import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommentEffects } from './comment.effects';
import { CommentFeatureKey, commentReducer } from './comment.reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([CommentEffects]),
        StoreModule.forFeature(CommentFeatureKey, commentReducer),
    ],
})
export class CommentStoreModule {}
