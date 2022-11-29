import { createAction, props } from '@ngrx/store';
import { ReplyEntity } from '../models/reply.model';

export enum ReplyActions {
    LOAD_REPLIES_SUCCESS = '[reply] load success',
    LOAD_REPLIES_FAILURE = '[reply] load failure',
    DELETE_REPLY_MODE = '[reply] delete mode',
    EDIT_REPLY_MODE = '[reply] edit mode',
    FLAG_REPLY_MODE = '[reply] flag mode',
    TURN_OFF_MODES = '[reply] turn off modes',
}

export const loadRepliesSuccess = createAction(ReplyActions.LOAD_REPLIES_SUCCESS, props<{ replies: ReplyEntity[] }>());
export const loadRepliesFailure = createAction(ReplyActions.LOAD_REPLIES_FAILURE, props<{ msg: string }>());
export const deleteReplyMode = createAction(ReplyActions.DELETE_REPLY_MODE, props<{ id: string }>());
export const editReplyMode = createAction(ReplyActions.EDIT_REPLY_MODE, props<{ id: string }>());
export const flagReplyMode = createAction(ReplyActions.FLAG_REPLY_MODE, props<{ id: string }>());
export const turnOffReplyModes = createAction(ReplyActions.TURN_OFF_MODES);
