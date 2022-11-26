import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { EpisodeActionTypes } from 'src/app/episode/store/episode.actions';
import { ReplyService } from '../services/reply.service';
import { ReplyActions } from './reply.actions';

@Injectable()
export class ReplyEffects {
    constructor(private actions$: Actions, private replyService: ReplyService) {}

    loadReplies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EpisodeActionTypes.LOAD_EPISODES_REQUEST),
            mergeMap(() =>
                this.replyService.getReplies().pipe(
                    map((replies) => ({ type: ReplyActions.LOAD_REPLIES_SUCCESS, replies: replies })),
                    catchError((error) => of({ type: ReplyActions.LOAD_REPLIES_FAILURE, msg: error }))
                )
            )
        );
    });
}
