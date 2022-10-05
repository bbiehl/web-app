import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEpisode } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episode$: Observable<Episode | undefined> = this.store.select(selectEpisode);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.episode$.subscribe((ep) => console.log(ep));
    }
}
