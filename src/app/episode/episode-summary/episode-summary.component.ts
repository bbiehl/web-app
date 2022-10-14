import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shared/types/categories.enum';
import { loadEpisodesRequest, selectEpisode } from '../store/episode.actions';
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

    constructor(private router: Router, private store: Store) {}

    public handleLinkClick(episode: Episode) {
        this.store.dispatch(selectEpisode({ episode }));
        this.router.navigate([Categories.EPISODES, episode.id]);
    }
}
