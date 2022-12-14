import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Episode } from '../types/episode.model';
import * as EpisodeActions from './episode.actions';

export const EpisodeFeatureKey = 'episodes';

export interface EpisodeState extends EntityState<Episode> {
    selectedEpisode: Episode | null;
    error: any;
    isLoading: boolean;
}

export function sortByDate(a: Episode, b: Episode): number {
    return b.properties.date.toUTCString().localeCompare(a.properties.date.toUTCString());
}

export const episodeAdapter: EntityAdapter<Episode> = createEntityAdapter<Episode>({
    sortComparer: sortByDate,
    // selectId: (episode) => episode.id,
});

export const initialEpisodeState: EpisodeState = episodeAdapter.getInitialState({
    selectedEpisode: null,
    error: null,
    isLoading: false,
});

export const episodeReducer = createReducer<EpisodeState>(
    initialEpisodeState,
    on(
        EpisodeActions.loadEpisodesRequest,
        (episodeState): EpisodeState => ({
            ...episodeState,
            error: null,
            isLoading: true,
        })
    ),
    on(
        EpisodeActions.loadEpisodesFailure,
        (episodeState): EpisodeState => ({
            ...episodeState,
            error: 'error msg',
            isLoading: false,
        })
    ),
    on(EpisodeActions.loadEpisodesSuccess, (episodeState: EpisodeState, { episodes }) => {
        return episodeAdapter.setAll(episodes, {
            ...episodeState,
            error: null,
            isLoading: false,
        });
    }),
    on(
        EpisodeActions.selectEpisode,
        (episodeState, { episode }): EpisodeState => ({
            ...episodeState,
            selectedEpisode: episode,
        })
    ),
    on(EpisodeActions.mapEpisodes, (episodeState, { entityMap }) => {
        return episodeAdapter.map(entityMap, episodeState);
    })
);
