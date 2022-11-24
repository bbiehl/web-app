import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export enum CommentActions {
    LOAD_COMMENTS_SUCCESS = '[comment] load success',
    LOAD_COMMENTS_FAILURE = '[comment] load fail',
}

export const loadCommentsSuccess = createAction(CommentActions.LOAD_COMMENTS_SUCCESS, props<{ comments: Comment[] }>());
export const loadCommentsFailure = createAction(CommentActions.LOAD_COMMENTS_FAILURE, props<{ msg: string }>());
