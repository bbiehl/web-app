import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Episode } from '../types/episode.model';

export function selectEpisodeId(a: Episode): string {
    return a.id;
}

export function sortByDate(a: Episode, b: Episode): number {
    return a.date.toLocaleDateString().localeCompare(b.date.toLocaleDateString());
}

export const episodeAdapter: EntityAdapter<Episode> = createEntityAdapter<Episode>({
    selectId: selectEpisodeId,
    sortComparer: sortByDate,
});

export interface EpisodeState extends EntityState<Episode> {
    isLoading: boolean;
    error: any;
}
export const initialEpisodeState: EpisodeState = episodeAdapter.getInitialState({
    isLoading: false,
    error: null,
});
