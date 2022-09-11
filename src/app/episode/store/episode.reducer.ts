import { createReducer, on } from '@ngrx/store';
import { EpisodeActionTypes } from './episode.actions';
import { EpisodeState, initialEpisodeState } from './episode.state';
import * as EpisodeActions from './episode.actions';

// export function episodeFeatureReducer(state = initialEpisodeState): EpisodeState {
//     return state;
// }

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

// export const episodeReducer = createReducer<EpisodeFeatureState>(
//     initialEpisodeFeatureState,

//     on(
//         EpisodeActions.loadImdbMoviesFail,
//         (state): EpisodeFeatureState => ({
//             ...state,
//             imdbMoviesloading: false,
//             imdbMovieserror: true,
//         })
//     ),
//     on(
//         EpisodeActions.loadImdbMoviesSuccess,
//         (state, action): EpisodeFeatureState => ({
//             ...state,
//             imdbMovies: action.imdbMovies,
//             imdbMoviesloading: false,
//             imdbMovieserror: false,
//         })
//     ),
