import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './user.effects';
import { UserFeatureKey, userReducer } from './user.reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EffectsModule.forFeature([UserEffects]),
        StoreModule.forFeature(UserFeatureKey, userReducer),
    ],
})
export class UserStoreModule {}
