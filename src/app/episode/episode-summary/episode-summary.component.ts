import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllEpisodes, selectEpisodesAreLoading } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@Component({
    selector: 'app-episode-summary',
    templateUrl: './episode-summary.component.html',
    styleUrls: ['./episode-summary.component.scss'],
})
export class EpisodeSummaryComponent {
    episodes$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    loading$: Observable<boolean> = this.store.select(selectEpisodesAreLoading);

    constructor(private store: Store) {}

    public handleNav(): void {
        console.log('handle nav');
    }
}
