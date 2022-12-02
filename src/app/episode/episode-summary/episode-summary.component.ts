import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shared/types/categories.enum';
import { selectEpisode } from '../store/episode.actions';
import { selectEpisodesAreLoading, selectFullEpisodes } from '../store/episode.selector';
import { Episode, EpisodeFull } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-summary',
    templateUrl: './episode-summary.component.html',
    styleUrls: ['./episode-summary.component.scss'],
})
export class EpisodeSummaryComponent implements OnInit {
    episodes: EpisodeFull[] | null;
    loading$: Observable<boolean> = this.store.select(selectEpisodesAreLoading);

    constructor(private router: Router, private store: Store) {
        this.episodes = null;
    }

    ngOnInit(): void {
        this.store
            .select(selectFullEpisodes)
            .pipe(untilDestroyed(this))
            .subscribe((episodes) => {
                this.episodes = episodes;
            });
    }

    public handleLinkClick(episode: Episode) {
        this.store.dispatch(selectEpisode({ episode }));
        this.router.navigate([Categories.EPISODES, episode.id]);
    }
}
