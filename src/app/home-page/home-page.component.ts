import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllEpisodes } from '../episode/store/episode.selector';
import { Episode } from '../episode/types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    episodes$: Observable<Episode[]> = this.store.select(selectAllEpisodes);

    constructor(private store: Store) {}
}
