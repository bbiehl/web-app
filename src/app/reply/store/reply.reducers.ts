import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { ReplyEntity } from '../models/reply.model';
import * as ReplyActions from './reply.actions';

export const ReplyFeatureKey = 'replies';

export interface ReplyState extends EntityState<ReplyEntity> {
    deleteMode: boolean;
    editMode: boolean;
    error: any;
    flagMode: boolean;
    loading: boolean;
    selectedReplyId: string | null;
}

export function sortByDate(a: ReplyEntity, b: ReplyEntity): number {
    return b.properties.date.toUTCString().localeCompare(a.properties.date.toUTCString());
}

export const replyAdapter: EntityAdapter<ReplyEntity> = createEntityAdapter<ReplyEntity>({
    sortComparer: sortByDate,
});

export const initialReplyState: ReplyState = replyAdapter.getInitialState({
    deleteMode: false,
    editMode: false,
    error: null,
    flagMode: false,
    loading: false,
    selectedReplyId: null,
});

export const replyReducer = createReducer<ReplyState>(
    initialReplyState,
    on(
        loadEpisodesRequest,
        (state): ReplyState => ({
            ...state,
            error: null,
            loading: true,
        })
    ),
    on(ReplyActions.loadRepliesSuccess, (state: ReplyState, { replies }) =>
        replyAdapter.addMany(replies, {
            ...state,
            error: null,
            loading: false,
        })
    ),
    on(
        ReplyActions.loadRepliesFailure,
        (state): ReplyState => ({
            ...state,
            error: 'Replies failed to load.',
            loading: false,
        })
    ),
    on(ReplyActions.deleteReplyMode, (state, { id }): ReplyState => {
        return { ...state, deleteMode: true, editMode: false, flagMode: false, selectedReplyId: id };
    }),
    on(ReplyActions.editReplyMode, (state, { id }): ReplyState => {
        return { ...state, deleteMode: false, editMode: true, flagMode: false, selectedReplyId: id };
    }),
    on(ReplyActions.flagReplyMode, (state, { id }): ReplyState => {
        return { ...state, deleteMode: false, editMode: false, flagMode: true, selectedReplyId: id };
    }),
    on(ReplyActions.turnOffReplyModes, (state): ReplyState => {
        return { ...state, deleteMode: false, editMode: false, flagMode: true, selectedReplyId: null };
    })
);
