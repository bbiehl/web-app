import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/shared/types/categories.enum';
import { APPLE_PODCASTS_ICON } from 'src/icons/apple_podcasts';
import { IHEARTRADIO_ICON } from 'src/icons/IHeartRadio_logo';
import { ITUNES_ICON } from 'src/icons/ITunes_logo';
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
    episode!: Episode;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router, private store: Store) {
        iconRegistry.addSvgIconLiteral('applePodcasts', sanitizer.bypassSecurityTrustHtml(APPLE_PODCASTS_ICON));
        iconRegistry.addSvgIconLiteral('iTunes', sanitizer.bypassSecurityTrustHtml(ITUNES_ICON));
        iconRegistry.addSvgIconLiteral('iHeartRadio', sanitizer.bypassSecurityTrustHtml(IHEARTRADIO_ICON));
    }

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
