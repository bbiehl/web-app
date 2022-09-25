import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllEpisodes, selectEpisodeStateIsLoading } from '../../store/episode.selector';
import { Episode } from '../../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-list-container',
    templateUrl: './episode-list-container.component.html',
    styleUrls: ['./episode-list-container.component.scss'],
})
export class EpisodeListContainerComponent {
    episode$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    isLoading$: Observable<boolean> = this.store.select(selectEpisodeStateIsLoading);

    constructor(private store: Store) {}
}
