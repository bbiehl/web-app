import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { selectFullEpisodes } from '../store/episode.selector';
import { EpisodeFull } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-overview',
    templateUrl: './episode-overview.component.html',
    styleUrls: ['./episode-overview.component.scss'],
})
export class EpisodeOverviewComponent implements OnInit {
    episodes: EpisodeFull[] = [];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store
            .select(selectFullEpisodes)
            .pipe(untilDestroyed(this))
            .subscribe((e) => {
                this.episodes = e.slice(0, 3);
            });
    }
}
