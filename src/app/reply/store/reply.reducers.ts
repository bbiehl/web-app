import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { Reply } from '../models/reply.model';
import { loadRepliesFailure, loadRepliesSuccess } from './reply.actions';

export const ReplyFeatureKey = 'replies';

export interface ReplyState extends EntityState<Reply> {
    error: any;
    loading: boolean;
}

export function sortByDate(a: Reply, b: Reply): number {
    return b.properties.date.toUTCString().localeCompare(a.properties.date.toUTCString());
}

export const replyAdapter: EntityAdapter<Reply> = createEntityAdapter<Reply>({
    sortComparer: sortByDate,
});

export const initialReplyState: ReplyState = replyAdapter.getInitialState({
    error: null,
    loading: false,
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
    on(loadRepliesSuccess, (state: ReplyState, { replies }) =>
        replyAdapter.addMany(replies, {
            ...state,
            error: null,
            loading: false,
        })
    ),
    on(
        loadRepliesFailure,
        (state): ReplyState => ({
            ...state,
            error: 'Replies failed to load.',
            loading: false,
        })
    )
);
