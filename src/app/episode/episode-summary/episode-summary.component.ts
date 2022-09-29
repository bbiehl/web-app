import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EpisodeFormComponent } from '../episode-form/episode-form.component';
import { selectAllEpisodes } from '../store/episode.selector';
import { Episode } from '../types/episode.model';

@Component({
    selector: 'app-episode-summary',
    templateUrl: './episode-summary.component.html',
    styleUrls: ['./episode-summary.component.scss'],
})
export class EpisodeSummaryComponent {
    episodes$: Observable<Episode[]> = this.store.select(selectAllEpisodes);
    // TODO: get isLoading selector working
    // isLoading$: Observable<boolean> = this.store.select(selectEpisodeStateIsLoading);
    loading: boolean = false;

    constructor(public dialog: MatDialog, private store: Store) {}

    public openAddEpisodeDialog(): void {
        const dialogRef = this.dialog.open(EpisodeFormComponent, {
            width: '90%',
        });
    }

    public handleNav(): void {
        console.log('handle nav');
    }
}
