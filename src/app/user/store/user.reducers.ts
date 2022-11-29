import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadEpisodesRequest } from 'src/app/episode/store/episode.actions';
import { mockUsers } from '../mocks/users-mock';
import { User } from '../models/user.model';
import { loadUsersFailure, loadUsersSuccess } from './user.actions';

export const UserFeatureKey = 'users';

export interface UserState extends EntityState<User> {
    currentUserId: string | null;
    error: any;
    loading: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({});

export const initialUserState: UserState = userAdapter.getInitialState({
    currentUserId: 'brad123',
    error: null,
    loading: false,
});

export const userReducer = createReducer<UserState>(
    initialUserState,
    on(
        loadEpisodesRequest,
        (state): UserState => ({
            ...state,
            error: null,
            loading: true,
        })
    ),
    on(loadUsersSuccess, (state: UserState, { users }) =>
        userAdapter.addMany(users, {
            ...state,
            error: null,
            loading: false,
        })
    ),
    on(
        loadUsersFailure,
        (state): UserState => ({
            ...state,
            error: 'Users failed to load.',
            loading: false,
        })
    )
);
