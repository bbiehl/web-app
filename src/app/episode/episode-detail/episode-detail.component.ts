import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shared/types/categories.enum';
import { selectEpisode } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episode$: Observable<Episode | undefined> = this.store.select(selectEpisode);

    constructor(private router: Router, private store: Store) {}

    ngOnInit(): void {
        this.episode$.pipe(untilDestroyed(this)).subscribe((ep) => {
            if (ep === undefined) {
                this.router.navigateByUrl(Categories.EPISODES);
            }
        });
    }
}
