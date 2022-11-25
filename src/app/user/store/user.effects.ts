import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { EpisodeActionTypes } from 'src/app/episode/store/episode.actions';
import { UserService } from '../services/user.service';
import { UserActions } from './user.actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) {}

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EpisodeActionTypes.LOAD_EPISODES_REQUEST),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map((users) => ({ type: UserActions.LOAD_USERS_SUCCESS, users: users })),
                    catchError((error) => of({ type: UserActions.LOAD_USERS_FAILURE, msg: error }))
                )
            )
        );
    });
}
