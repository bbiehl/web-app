import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../models/user.model';
import { userAdapter, UserFeatureKey, UserState } from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>(UserFeatureKey);
export const { selectEntities, selectAll } = userAdapter.getSelectors();
export const selectAllUsers = createSelector(selectUserState, selectAll);

export const selectCurrentUser = createSelector(selectUserState, selectAllUsers, (state, users): User | undefined => {
    return users.find((u) => u.id === state.currentUserId);
});
