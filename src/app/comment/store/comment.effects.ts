import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { EpisodeActionTypes } from 'src/app/episode/store/episode.actions';
import { CommentService } from '../services/comment.service';
import { CommentActions } from './comment.actions';

@Injectable()
export class CommentEffects {
    constructor(private actions$: Actions, private commentService: CommentService) {}

    loadComments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EpisodeActionTypes.LOAD_EPISODES_REQUEST),
            mergeMap(() =>
                this.commentService.getComments().pipe(
                    map((comments) => ({ type: CommentActions.LOAD_COMMENTS_SUCCESS, comments: comments })),
                    catchError((error) => of({ type: CommentActions.LOAD_COMMENTS_FAILURE, msg: error }))
                )
            )
        );
    });
}
