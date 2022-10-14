import { EntityMap } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export enum EpisodeActionTypes {
    LOAD_EPISODES_REQUEST = '[episode] load episodes request',
    LOAD_EPISODES_FAILURE = '[episodes] load episodes fail',
    LOAD_EPISODES_SUCCESS = '[episodes] load episodes success',
    SELECT_EPISODE = '[episodes] select episode',
    LOAD_ONE_EPISODE_REQUEST = '[episodes] load one episode request',
    LOAD_ONE_EPISODE_FAILURE = '[episodes] load one episode failure',
    LOAD_ONE_EPISODE_SUCCESS = '[episodes] load one episode success',
    MAP_EPISODES = '[episode] map episodes',
    SET_EPISODES = '[episode] set episodes',
}

export const loadEpisodesRequest = createAction(EpisodeActionTypes.LOAD_EPISODES_REQUEST);
export const loadEpisodesFailure = createAction(EpisodeActionTypes.LOAD_EPISODES_FAILURE);
export const loadEpisodesSuccess = createAction(
    EpisodeActionTypes.LOAD_EPISODES_SUCCESS,
    props<{ episodes: Episode[] }>()
);
export const loadOneEpisodeRequest = createAction(
    EpisodeActionTypes.LOAD_ONE_EPISODE_REQUEST,
    props<{ episodeId: string }>()
);
export const loadOneEpisodeFailure = createAction(EpisodeActionTypes.LOAD_ONE_EPISODE_FAILURE);
export const loadOneEpisodeSuccess = createAction(
    EpisodeActionTypes.LOAD_ONE_EPISODE_SUCCESS,
    props<{ episode: Episode }>()
);
export const selectEpisode = createAction(EpisodeActionTypes.SELECT_EPISODE, props<{ episode: Episode }>());
export const mapEpisodes = createAction(EpisodeActionTypes.MAP_EPISODES, props<{ entityMap: EntityMap<Episode> }>());
export const setEpisodes = createAction(EpisodeActionTypes.SET_EPISODES, props<{ episodes: Episode[] }>());
