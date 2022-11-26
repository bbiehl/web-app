import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAllComments } from 'src/app/comment/store/comment.selectors';
import { selectAllUsers } from 'src/app/user/store/user.selectors';
import { ReplyFull } from '../models/reply.model';
import { replyAdapter, ReplyFeatureKey, ReplyState } from './reply.reducers';

export const selectReplyState = createFeatureSelector<ReplyState>(ReplyFeatureKey);
export const { selectEntities, selectAll } = replyAdapter.getSelectors();
export const selectAllReplies = createSelector(selectReplyState, selectAll);

export const selectFullReplies = createSelector(selectAllReplies, selectAllUsers, (replies, users) => {
    const fullReplies: ReplyFull[] = [];
    replies.forEach((r) => {
        fullReplies.push({
            id: r.id,
            properties: {
                body: r.properties.body,
                commentId: r.properties.commentId,
                date: r.properties.date,
                replyToUser: users.find((u) => u.id === r.properties.replyToUserId),
                user: users.find((u) => u.id === r.properties.userId),
            },
        });
    });
    return fullReplies;
});
