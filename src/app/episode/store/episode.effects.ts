import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { EpisodeService } from '../services/episode.service';
import { EpisodeActionTypes } from './episode.actions';

@Injectable()
export class EpisodeEffects {
    constructor(private actions$: Actions, private episodeService: EpisodeService) {}

    loadEpisodes$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EpisodeActionTypes.LOAD_EPISODES_REQUEST),
            mergeMap(() =>
                this.episodeService.getEpisodes().pipe(
                    map((episodes) => ({ type: EpisodeActionTypes.LOAD_EPISODES_SUCCESS, episodes: episodes })),
                    catchError(() => EMPTY)
                )
            )
        );
    });
}
