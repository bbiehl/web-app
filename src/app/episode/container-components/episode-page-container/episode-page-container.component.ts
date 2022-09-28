import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllEpisodes } from '../../store/episode.selector';
import { Episode } from '../../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-page-container',
    templateUrl: './episode-page-container.component.html',
    styleUrls: ['./episode-page-container.component.scss'],
})
export class EpisodePageContainerComponent {
    episode$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    // TODO: get isLoading selector working
    // isLoading$: Observable<boolean> = this.store.select(selectEpisodeStateIsLoading);

    constructor(private store: Store) {}
}
