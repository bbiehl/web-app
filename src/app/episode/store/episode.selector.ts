import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParams } from 'src/app/router.selectors';
import { episodeAdapter, EpisodeFeatureKey, EpisodeState } from './episode.reducer';

export const selectEpisodeState = createFeatureSelector<EpisodeState>(EpisodeFeatureKey);

export const { selectEntities, selectAll } = episodeAdapter.getSelectors();

export const selectAllEpisodes = createSelector(selectEpisodeState, selectAll);
export const selectEpisodeEntities = createSelector(selectEpisodeState, selectEntities);
export const selectEpisode = createSelector(
    selectEpisodeEntities,
    selectRouteParams,
    (episodes, { id }) => episodes[id]
);
export const selectEpisodesAreLoading = createSelector(selectEpisodeState, (episodeState) => episodeState.isLoading);
export const selectSelectedEpisode = createSelector(selectEpisodeState, (episodeState) => episodeState.selectedEpisode);
