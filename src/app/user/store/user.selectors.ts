import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userAdapter, UserFeatureKey, UserState } from "./user.reducers";

export const selectUserState = createFeatureSelector<UserState>(UserFeatureKey);
export const { selectEntities, selectAll } = userAdapter.getSelectors();
export const selectAllUsers = createSelector(selectUserState, selectAll);