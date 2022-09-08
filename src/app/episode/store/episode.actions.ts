import { createAction, props } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export enum EpisodeActionTypes {
    CREATE = '[episode] add',
    UPDATE = '[episode] update',
    DELETE_SINGLE = '[episode] delete single',
    DELETE_MULTI = '[episode] delete multi',
    VIEW_SINGLE = '[episode] view single',
    VIEW_LIST = '[episode] view list',
}

export const create = createAction(EpisodeActionTypes.CREATE, props<{ payload: Partial<Episode> }>());
export const update = createAction(EpisodeActionTypes.UPDATE, props<{ payload: Episode }>());
export const deleteSingle = createAction(EpisodeActionTypes.DELETE_SINGLE, props<{ id: string }>());
export const deleteMultiple = createAction(EpisodeActionTypes.DELETE_MULTI, props<{ ids: string[] }>());
export const viewSingle = createAction(EpisodeActionTypes.VIEW_SINGLE, props<{ payload: Episode }>());
export const viewList = createAction(EpisodeActionTypes.VIEW_LIST, props<{ payload: Episode[] }>());
