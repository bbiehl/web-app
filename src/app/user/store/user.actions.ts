import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export enum UserActions {
    LOAD_USERS_SUCCESS = '[user] load success',
    LOAD_USERS_FAILURE = '[user] load failure',
}

export const loadUsersSuccess = createAction(UserActions.LOAD_USERS_SUCCESS, props<{ users: User[] }>());
export const loadUsersFailure = createAction(UserActions.LOAD_USERS_FAILURE, props<{ msg: string }>());
