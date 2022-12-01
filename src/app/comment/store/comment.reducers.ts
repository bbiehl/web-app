import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { Comment } from '../models/comment.model';
import * as CommentActions from './comment.actions';

export const CommentFeatureKey = 'comments';

export interface CommentState extends EntityState<Comment> {
    deleteMode: boolean;
    editMode: boolean;
    flagMode: boolean;
    replyMode: boolean;
    error: any;
    loading: boolean;
    selectedCommentId: string | null;
}

export const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({});

export const initialCommentState: CommentState = commentAdapter.getInitialState({
    deleteMode: false,
    editMode: false,
    flagMode: false,
    replyMode: false,
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
    on(CommentActions.deleteCommentMode, (state, { id }): CommentState => {
        return { ...state, deleteMode: true, editMode: false, flagMode: false, replyMode: false, selectedCommentId: id };
    }),
    on(CommentActions.editCommentMode, (state, { id }): CommentState => {
        return { ...state, deleteMode: false, editMode: true, flagMode: false, replyMode: false, selectedCommentId: id };
    }),
    on(CommentActions.flagCommentMode, (state, { id }): CommentState => {
        return { ...state, deleteMode: false, editMode: false, flagMode: true, replyMode: false, selectedCommentId: id };
    }),
    on(CommentActions.replyToCommentMode, (state, { id }): CommentState => {
        return { ...state, deleteMode: false, editMode: false, flagMode: false, replyMode: true, selectedCommentId: id };
    }),
    on(CommentActions.turnOffModes, (state): CommentState => {
        return { ...state, editMode: false, flagMode: false, deleteMode: false, selectedCommentId: null };
    })
);
