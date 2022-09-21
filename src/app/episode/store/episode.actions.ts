import { EntityMap } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export enum EpisodeActionTypes {
    GET_EPISODES = '[episode] get episodes',
    GET_EPISODES_FAIL = '[episodes api] get episodes fail',
    LOAD_EPISODES = '[episodes api] load episodes',
    MAP_EPISODES = '[episode] map episodes',
    SET_EPISODES = '[episode] set episodes',
}

export const getEpisodes = createAction(EpisodeActionTypes.GET_EPISODES);
export const getEpisodesFail = createAction(EpisodeActionTypes.GET_EPISODES_FAIL);
export const loadEpisodes = createAction(EpisodeActionTypes.LOAD_EPISODES, props<{ episodes: Episode[] }>());
export const mapEpisodes = createAction(EpisodeActionTypes.MAP_EPISODES, props<{ entityMap: EntityMap<Episode> }>());
export const setEpisodes = createAction(EpisodeActionTypes.SET_EPISODES, props<{ episodes: Episode[] }>());
