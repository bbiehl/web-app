import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export enum CommentActions {
    LOAD_COMMENTS_SUCCESS = '[comment] load success',
    LOAD_COMMENTS_FAILURE = '[comment] load fail',
    EDIT_COMMENT_ON = '[comment] edit on',
    EDIT_COMMENT_OFF = '[comment] edit off',
}

export const loadCommentsSuccess = createAction(CommentActions.LOAD_COMMENTS_SUCCESS, props<{ comments: Comment[] }>());
export const loadCommentsFailure = createAction(CommentActions.LOAD_COMMENTS_FAILURE, props<{ msg: string }>());
export const editCommentOn = createAction(CommentActions.EDIT_COMMENT_ON, props<{ id: string }>());
export const editCommentOff = createAction(CommentActions.EDIT_COMMENT_OFF);
