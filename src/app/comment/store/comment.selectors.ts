import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectFullReplies } from 'src/app/reply/store/reply.selectors';
import { selectRouteParams } from 'src/app/router.selectors';
import { selectAllUsers } from 'src/app/user/store/user.selectors';
import { FullComment } from '../models/comment.model';
import { commentAdapter, CommentFeatureKey, CommentState } from './comment.reducers';

export const selectCommentState = createFeatureSelector<CommentState>(CommentFeatureKey);
export const { selectEntities, selectAll } = commentAdapter.getSelectors();
export const selectAllComments = createSelector(selectCommentState, selectAll);
export const selectCommentEntities = createSelector(selectCommentState, selectEntities);
export const selectCommentsLoading = createSelector(selectCommentState, (state) => state.loading);
export const selectCommentsError = createSelector(selectCommentState, (state) => state.error);
export const selectComment = createSelector(selectCommentEntities, selectRouteParams, (events, { id }) => events[id]);

export const selectFullComments = createSelector(
    selectAllComments,
    selectAllUsers,
    selectFullReplies,
    (comments, users, replies) => {
        const fullComments: FullComment[] = [];
        comments.forEach((c) => {
            fullComments.push({
                id: c.id,
                properties: {
                    body: c.properties.body,
                    collection: c.properties.collection,
                    date: c.properties.date,
                    isFlagged: c.properties.isFlagged,
                    postId: c.properties.postId,
                    replies: replies.filter((r) => r.properties.commentId === c.id),
                    user: users.find((u) => u.id === c.properties.userId),
                },
            });
        });
        return fullComments;
    }
);
