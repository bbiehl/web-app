import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from 'src/app/router.selectors';
import { commentAdapter, CommentFeatureKey, CommentState } from './comment.reducers';

export const selectCommentState = createFeatureSelector<CommentState>(CommentFeatureKey);
export const { selectEntities, selectAll } = commentAdapter.getSelectors();
export const selectAllComments = createSelector(selectCommentState, selectAll);
export const selectCommentEntities = createSelector(selectCommentState, selectEntities);
export const selectCommentsLoading = createSelector(selectCommentState, (state) => state.loading);
export const selectCommentsError = createSelector(selectCommentState, (state) => state.error);
export const selectComment = createSelector(selectCommentEntities, selectRouteParams, (events, { id }) => events[id]);
