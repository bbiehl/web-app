import { createAction, props } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export enum EpisodeActionTypes {
    LOAD_EPISODES = '[episode] load episodes',
    GET_EPISODES_FAIL = '[episodes api] get episodes fail',
    GET_EPISODES_SUCCESS = '[episodes api] get episodes success',
}

export const loadEpisodes = createAction(EpisodeActionTypes.LOAD_EPISODES);
export const getEpisodesFail = createAction(EpisodeActionTypes.GET_EPISODES_FAIL);
export const getEpisodesSuccess = createAction(EpisodeActionTypes.GET_EPISODES_SUCCESS, props<{ payload: Episode[] }>);
