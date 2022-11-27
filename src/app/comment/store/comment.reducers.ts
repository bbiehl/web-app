import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { Comment } from '../models/comment.model';
import * as CommentActions from './comment.actions';

export const CommentFeatureKey = 'comments';

export interface CommentState extends EntityState<Comment> {
    editMode: boolean;
    flagMode: boolean;
    error: any;
    loading: boolean;
    selectedCommentId: string | null;
}

export const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({});

export const initialCommentState: CommentState = commentAdapter.getInitialState({
    editMode: false,
    flagMode: false,
    error: null,
    loading: false,
    selectedCommentId: null,
});

export const commentReducer = createReducer<CommentState>(
    initialCommentState,
    on(
        loadEpisodesRequest,
        (state): CommentState => ({
            ...state,
            error: null,
            loading: true,
        })
    ),
    on(CommentActions.loadCommentsSuccess, (state: CommentState, { comments }) =>
        commentAdapter.addMany(comments, {
            ...state,
            error: null,
            loading: false,
        })
    ),
    on(
        CommentActions.loadCommentsFailure,
        (state): CommentState => ({
            ...state,
            error: 'Comments failed to load.',
            loading: false,
        })
    ),
    on(CommentActions.editCommentOn, (state, { id }): CommentState => {
        return { ...state, editMode: true, flagMode: false, selectedCommentId: id };
    }),
    on(CommentActions.editCommentOff, (state): CommentState => {
        return { ...state, editMode: false, flagMode: false, selectedCommentId: null };
    }),
    on(CommentActions.flagCommentOn, (state, { id }): CommentState => {
        return { ...state, flagMode: true, editMode: false, selectedCommentId: id };
    }),
    on(CommentActions.flagCommentOff, (state): CommentState => {
        return { ...state, flagMode: false, editMode: false, selectedCommentId: null };
    })
);
