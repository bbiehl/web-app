import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shared/types/categories.enum';
import { selectSelectedEpisode } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episode$: Observable<Episode | null> = this.store.select(selectSelectedEpisode);
    episode: Episode | undefined = undefined;

    constructor(private router: Router, private store: Store) {}

    ngOnInit(): void {
        this.episode$.pipe(untilDestroyed(this)).subscribe((ep) => {
            if (!ep) {
                this.router.navigate([Categories.EPISODES]);
            } else {
                this.episode = ep;
            }
        });
    }
}
