import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { Comment } from '../models/comment.model';
import { editCommentOff, editCommentOn, loadCommentsFailure, loadCommentsSuccess } from './comment.actions';

export const CommentFeatureKey = 'comments';

export interface CommentState extends EntityState<Comment> {
    editMode: boolean;
    error: any;
    loading: boolean;
    selectedCommentId: string | null;
}

export const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({});

export const initialCommentState: CommentState = commentAdapter.getInitialState({
    editMode: false,
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
    on(loadCommentsSuccess, (state: CommentState, { comments }) =>
        commentAdapter.addMany(comments, {
            ...state,
            error: null,
            loading: false,
        })
    ),
    on(
        loadCommentsFailure,
        (state): CommentState => ({
            ...state,
            error: 'Comments failed to load.',
            loading: false,
        })
    ),
    on(editCommentOn, (state: CommentState, { id }): CommentState => {
        return { ...state, editMode: true, selectedCommentId: id };
    }),
    on(editCommentOff, (state: CommentState): CommentState => {
        return { ...state, editMode: false, selectedCommentId: null };
    })
);
