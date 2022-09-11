import { createAction, props } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export enum EpisodeActionTypes {
    LOAD_EPISODES = '[episode] load episodes',
    GET_EPISODES_FAIL = '[episodes api] get episodes fail',
    GET_EPISODES_SUCCESS = '[episodes api] get episodes success',
    // CREATE = '[episode] add',
    // DELETE_MULTI = '[episode] delete multi',
    // DELETE_SINGLE = '[episode] delete single',
    // LOAD_LIST = '[episode] load list',
    // UPDATE = '[episode] update',
    // VIEW_LIST = '[episode] view list',
    // VIEW_SINGLE = '[episode] view single',
}

export const loadEpisodes = createAction(EpisodeActionTypes.LOAD_EPISODES);
export const getEpisodesFail = createAction(EpisodeActionTypes.GET_EPISODES_FAIL);
export const getEpisodesSuccess = createAction(EpisodeActionTypes.GET_EPISODES_SUCCESS, props<{ payload: Episode[] }>);

// export const create = createAction(EpisodeActionTypes.CREATE, props<{ payload: Partial<Episode> }>());
// export const update = createAction(EpisodeActionTypes.UPDATE, props<{ payload: Episode }>());
// export const deleteSingle = createAction(EpisodeActionTypes.DELETE_SINGLE, props<{ id: string }>());
// export const deleteMultiple = createAction(EpisodeActionTypes.DELETE_MULTI, props<{ ids: string[] }>());
// export const viewSingle = createAction(EpisodeActionTypes.VIEW_SINGLE, props<{ payload: Episode }>());
// export const viewList = createAction(EpisodeActionTypes.VIEW_LIST, props<{ payload: Episode[] }>());
