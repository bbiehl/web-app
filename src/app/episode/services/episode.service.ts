import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { EpisodeMockData } from '../types/episode-mock-data';
import { Episode } from '../types/episode.model';

@Injectable({
    providedIn: 'root',
})
export class EpisodeService {
    constructor() {}

    getEpisodes(): Observable<Episode[]> {
        return of(EpisodeMockData).pipe(delay(2000));
    }

    getOneEpisode(id: string): Observable<Episode> {
        return of(EpisodeMockData.filter(e => e.id === id)[0]);
    }
}
