import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EpisodeAddContainerComponent } from '../../container-components/episode-add-container/episode-add-container.component';
import { Episode } from '../../types/episode.model';

@Component({
    selector: 'app-episode-list',
    templateUrl: './episode-list.component.html',
    styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent {
    @Input() episodes: Episode[] | null = [];
    @Input() loading: boolean | null = true;

    constructor(public dialog: MatDialog) {}

    public openAddEpisodeDialog(): void {
        const dialogRef = this.dialog.open(EpisodeAddContainerComponent, {
            width: '90%',
        });
    }
}
