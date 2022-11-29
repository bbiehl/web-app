import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAllUsers } from 'src/app/user/store/user.selectors';
import { ReplyObject } from '../models/reply.model';
import { replyAdapter, ReplyFeatureKey, ReplyState } from './reply.reducers';

export const selectReplyState = createFeatureSelector<ReplyState>(ReplyFeatureKey);
export const { selectEntities, selectAll } = replyAdapter.getSelectors();
export const selectAllReplies = createSelector(selectReplyState, selectAll);

export const selectReplyObjects = createSelector(
    selectReplyState,
    selectAllReplies,
    selectAllUsers,
    (state, replies, users) => {
        const replyObjects: ReplyObject[] = [];
        replies.forEach((r) => {
            replyObjects.push({
                body: r.properties.body,
                commentId: r.properties.commentId,
                date: r.properties.date,
                editedDate: r.properties.editedDate,
                isDeleteMode: state.deleteMode && state.selectedReplyId === r.id,
                isEditMode: state.editMode && state.selectedReplyId === r.id,
                isFlagMode: state.flagMode && state.selectedReplyId === r.id,
                isFlagged: r.properties.isFlagged,
                replyToUser: users.find((u) => u.id === r.properties.replyToUserId),
                user: users.find((u) => u.id === r.properties.userId),
            });
        });
        return replyObjects;
    }
);
