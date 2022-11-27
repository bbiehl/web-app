import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { selectFullSingleEpisode } from '../store/episode.selector';
import { EpisodeFull } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episode!: EpisodeFull;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store
            .select(selectFullSingleEpisode)
            .pipe(untilDestroyed(this))
            .subscribe((episode) => {
                this.episode = episode;
            });
    }
}
