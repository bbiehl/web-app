import { createAction, props } from '@ngrx/store';
import { Reply } from '../models/reply.model';

export enum ReplyActions {
    LOAD_REPLIES_SUCCESS = '[reply] load success',
    LOAD_REPLIES_FAILURE = '[reply] load failure',
}

export const loadRepliesSuccess = createAction(ReplyActions.LOAD_REPLIES_SUCCESS, props<{ replies: Reply[] }>());
export const loadRepliesFailure = createAction(ReplyActions.LOAD_REPLIES_FAILURE, props<{ msg: string }>());
