import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { APPLE_PODCASTS_ICON } from 'src/icons/apple_podcasts';
import { IHEARTRADIO_ICON } from 'src/icons/IHeartRadio_logo';
import { ITUNES_ICON } from 'src/icons/ITunes_logo';
import { selectFullSingleEpisode } from '../store/episode.selector';
import { EpisodeFull } from '../types/episode.model';

@UntilDestroy()
@Component({
    selector: 'app-episode-detail',
    templateUrl: './episode-detail.component.html',
    styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
    episode!: EpisodeFull;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private store: Store) {
        iconRegistry.addSvgIconLiteral('applePodcasts', sanitizer.bypassSecurityTrustHtml(APPLE_PODCASTS_ICON));
        iconRegistry.addSvgIconLiteral('iTunes', sanitizer.bypassSecurityTrustHtml(ITUNES_ICON));
        iconRegistry.addSvgIconLiteral('iHeartRadio', sanitizer.bypassSecurityTrustHtml(IHEARTRADIO_ICON));
    }

    ngOnInit(): void {
        this.store
            .select(selectFullSingleEpisode)
            .pipe(untilDestroyed(this))
            .subscribe((episode) => {
                this.episode = episode;
            });
    }
}
