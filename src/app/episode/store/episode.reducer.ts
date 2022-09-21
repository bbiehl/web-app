import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Episode } from '../types/episode.model';
import * as EpisodeActions from './episode.actions';

export const EpisodeFeatureKey = 'episodes';

export interface EpisodeState extends EntityState<Episode> {
    error: boolean;
    isLoaded: boolean;
    isLoading: boolean;
}

export const episodeAdapter: EntityAdapter<Episode> = createEntityAdapter<Episode>();

export const initialEpisodeState: EpisodeState = episodeAdapter.getInitialState({
    error: false,
    isLoaded: false,
    isLoading: false,
});

export const episodeReducer = createReducer<EpisodeState>(
    initialEpisodeState,
    on(
        EpisodeActions.getEpisodes,
        (episodeState): EpisodeState => ({
            ...episodeState,
            error: false,
            isLoaded: false,
            isLoading: true,
        })
    ),
    on(
        EpisodeActions.getEpisodesFail,
        (episodeState): EpisodeState => ({
            ...episodeState,
            error: true,
            isLoaded: false,
            isLoading: false,
        })
    ),
    on(EpisodeActions.loadEpisodes, (episodeState: EpisodeState, { episodes }) => {
        episodeState = {
            ids: [],
            entities: {},
            error: false,
            isLoaded: true,
            isLoading: false,
        }
        return episodeAdapter.setAll(episodes, episodeState);
    }),
    on(EpisodeActions.mapEpisodes, (episodeState, { entityMap }) => {
        return episodeAdapter.map(entityMap, episodeState);
    })
);

// get the selectors
const { selectAll, selectEntities } = episodeAdapter.getSelectors();
export const selectAllEpisodes = selectAll;
export const selectEpisodeEntities = selectEntities;
