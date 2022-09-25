import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEpisodeReducer from './episode.reducer';

export interface EpisodeState {
    episodes: fromEpisodeReducer.EpisodeState;
}

export const episodeReducers: ActionReducerMap<EpisodeState> = {
    episodes: fromEpisodeReducer.episodeReducer,
};

export const selectEpisodeState = createFeatureSelector<fromEpisodeReducer.EpisodeState>(
    fromEpisodeReducer.EpisodeFeatureKey
);
export const selectEpisodeStateIsLoading = createFeatureSelector<fromEpisodeReducer.EpisodeState['isLoading']>(
    fromEpisodeReducer.EpisodeFeatureKey
);

export const selectAllEpisodes = createSelector(selectEpisodeState, fromEpisodeReducer.selectAllEpisodes);
export const selectEpisodeEntities = createSelector(selectEpisodeState, fromEpisodeReducer.selectEpisodeEntities);
