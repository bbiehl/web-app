import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EpisodeMockData } from '../types/episode-mock-data';
import { Episode } from '../types/episode.model';

@Injectable({
    providedIn: 'root',
})
export class EpisodeService {
    constructor() {}

    getEpisodes(): Observable<Episode[]> {
        return of(EpisodeMockData);
    }
}
