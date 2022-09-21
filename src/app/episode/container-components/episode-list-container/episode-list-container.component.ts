import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEpisodes } from '../../store/episode.actions';
import { selectAllEpisodes } from '../../store/episode.selector';
import { Episode } from '../../types/episode.model';

@Component({
    selector: 'app-episode-list-container',
    templateUrl: './episode-list-container.component.html',
    styleUrls: ['./episode-list-container.component.scss'],
})
export class EpisodeListContainerComponent implements OnInit {
    episode$: Observable<Episode[]> = this.store.select(selectAllEpisodes);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(getEpisodes());
    }
}
