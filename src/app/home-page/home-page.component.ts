import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EpisodeActionTypes } from '../episode/store/episode.actions';
import { selectEpisodes } from '../episode/store/episode.selector';
import { Episode } from '../episode/types/episode.model';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    episodes$: Observable<Episode[]> = this.store.select(selectEpisodes);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.episodes$.subscribe((episodes) => console.log(episodes));
        this.store.dispatch({ type: EpisodeActionTypes.LOAD_EPISODES });
    }
}
