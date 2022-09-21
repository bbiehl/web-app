import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEpisodes } from '../../store/episode.actions';
import { EpisodeState } from '../../store/episode.reducer';
import { selectAllEpisodes, selectEpisodeState } from '../../store/episode.selector';
import { Episode } from '../../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-list-container',
    templateUrl: './episode-list-container.component.html',
    styleUrls: ['./episode-list-container.component.scss'],
})
export class EpisodeListContainerComponent implements OnInit {
    episode$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    episodeState$: Observable<EpisodeState> = this.store.select(selectEpisodeState);
    loading: boolean;

    constructor(private store: Store) {
        this.loading = true;
    }

    ngOnInit(): void {
        this.store.dispatch(getEpisodes());
        this.episodeState$.pipe(untilDestroyed(this)).subscribe((episodeState) => {
            this.loading = episodeState.isLoading;
        });
    }
}
