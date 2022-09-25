import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getEpisodes } from './episode/store/episode.actions';
import { Categories } from './shared/types/categories.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    navLinks = [Categories.EPISODES, Categories.MUSEUM];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(getEpisodes());
    }
}
