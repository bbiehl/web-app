import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export enum CommentActions {
    LOAD_COMMENTS_SUCCESS = '[comment] load success',
    LOAD_COMMENTS_FAILURE = '[comment] load fail',
    DELETE_COMMENT_MODE = '[comment] delete mode',
    EDIT_COMMENT_MODE = '[comment] edit mode',
    FLAG_COMMENT_MODE = '[comment] flag mode',
    REPLY_TO_COMMENT_MODE = '[comment] reply mode',
    TURN_OFF_MODES = '[comment] turn off modes',
}

export const loadCommentsSuccess = createAction(CommentActions.LOAD_COMMENTS_SUCCESS, props<{ comments: Comment[] }>());
export const loadCommentsFailure = createAction(CommentActions.LOAD_COMMENTS_FAILURE, props<{ msg: string }>());
export const deleteCommentMode = createAction(CommentActions.DELETE_COMMENT_MODE, props<{ id: string }>());
export const editCommentMode = createAction(CommentActions.EDIT_COMMENT_MODE, props<{ id: string }>());
export const flagCommentMode = createAction(CommentActions.FLAG_COMMENT_MODE, props<{ id: string }>());
export const replyToCommentMode = createAction(CommentActions.REPLY_TO_COMMENT_MODE, props<{ id: string }>());
export const turnOffModes = createAction(CommentActions.TURN_OFF_MODES);
