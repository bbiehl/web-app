import { createReducer, on } from '@ngrx/store';
import * as EpisodeActions from './episode.actions';
import { EpisodeState, initialEpisodeState } from './episode.state';

export const episodeFeatureReducer = createReducer<EpisodeState>(
    initialEpisodeState,
    on(
        EpisodeActions.loadEpisodes,
        (state): EpisodeState => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        EpisodeActions.getEpisodesFail,
        (state): EpisodeState => ({
            ...state,
            isLoading: false,
            error: true,
        })
    ),
    on(
        EpisodeActions.getEpisodesSuccess,
        (state, action): EpisodeState => ({
            ...state,
            ids: ['blargh'],
            entities: {},
            isLoading: false,
            error: false,
        })
    )
);
