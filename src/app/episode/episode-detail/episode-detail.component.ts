import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { selectAllEpisodes } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episodes$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    episodeId$: Observable<string | null> = this.activatedRoute.paramMap.pipe(
        map((params: ParamMap) => params.get('id'))
    );
    episode: Episode | undefined;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store) {
        this.episode = undefined;
    }

    ngOnInit(): void {
        combineLatest([this.episodes$, this.episodeId$])
            .pipe(untilDestroyed(this))
            .subscribe(([episodes, episodeId]) => {
                this.episode = episodes.filter((ep) => ep.id === episodeId)[0];
            });
    }
}
