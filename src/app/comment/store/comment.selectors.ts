import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectReplyObjects } from 'src/app/reply/store/reply.selectors';
import { selectRouteParams } from 'src/app/router.selectors';
import { selectAllUsers } from 'src/app/user/store/user.selectors';
import { Comment, FullComment } from '../models/comment.model';
import { commentAdapter, CommentFeatureKey, CommentState } from './comment.reducers';

export const selectCommentState = createFeatureSelector<CommentState>(CommentFeatureKey);
export const { selectEntities, selectAll } = commentAdapter.getSelectors();
export const selectAllComments = createSelector(selectCommentState, selectAll);
export const selectCommentEntities = createSelector(selectCommentState, selectEntities);
export const selectCommentsLoading = createSelector(selectCommentState, (state) => state.loading);
export const selectCommentsError = createSelector(selectCommentState, (state) => state.error);
export const selectComment = createSelector(selectCommentEntities, selectRouteParams, (events, { id }) => events[id]);

export const selectFullComments = createSelector(
    selectCommentState,
    selectAllComments,
    selectAllUsers,
    selectReplyObjects,
    (state, comments, users, replies) => {
        const fullComments: FullComment[] = [];
        comments.forEach((c) => {
            fullComments.push({
                id: c.id,
                properties: {
                    body: c.properties.body,
                    collection: c.properties.collection,
                    date: c.properties.date,
                    editedDate: c.properties.editedDate,
                    isFlagged: c.properties.isFlagged,
                    isInDeleteMode: state.selectedCommentId === c.id && state.deleteMode,
                    isInEditMode: state.selectedCommentId === c.id && state.editMode,
                    isInFlagMode: state.selectedCommentId === c.id && state.flagMode,
                    postId: c.properties.postId,
                    replies: replies.filter((r) => r.commentId === c.id),
                    user: users.find((u) => u.id === c.properties.userId),
                },
            });
        });
        return fullComments;
    }
);

export const selectCurrentComment = createSelector(
    selectCommentState,
    selectAllComments,
    (state, comments): Comment | undefined => {
        return comments.find((c) => c.id === state.selectedCommentId);
    }
);
