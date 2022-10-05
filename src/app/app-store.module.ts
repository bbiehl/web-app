import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EpisodeStoreModule } from './episode/store/episode-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EpisodeStoreModule,
        // Must import StoreModule before StoreDevtoolsModule. Otherwise Redux DevTools won't find store.
        StoreModule.forRoot({ router: routerReducer }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
})
export class AppStoreModule {}
