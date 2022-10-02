import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEpisodeReducer from './episode.reducer';

export interface EpisodeState {
    episodeState: fromEpisodeReducer.EpisodeState;
}

export const episodeReducers: ActionReducerMap<EpisodeState> = {
    episodeState: fromEpisodeReducer.episodeReducer,
};

export const selectEpisodeState = createFeatureSelector<fromEpisodeReducer.EpisodeState>(
    fromEpisodeReducer.EpisodeFeatureKey
);

export const selectAllEpisodes = createSelector(selectEpisodeState, fromEpisodeReducer.selectAllEpisodes);
export const selectEpisodeEntities = createSelector(selectEpisodeState, fromEpisodeReducer.selectEpisodeEntities);
export const selectEpisodesAreLoading = createSelector(selectEpisodeState, (state) => state.isLoading);
