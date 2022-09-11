import { createFeatureSelector } from '@ngrx/store';
import { Episode } from '../types/episode.model';

export const selectEpisodes = createFeatureSelector<Episode[]>('episodes');
