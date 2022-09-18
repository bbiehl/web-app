import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EpisodeAddContainerComponent } from '../../container-components/episode-add-container/episode-add-container.component';
import { Episode } from '../../types/episode.model';

@Component({
    selector: 'app-episode-list',
    templateUrl: './episode-list.component.html',
    styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
    @Input() episodes: Episode[] | null;

    constructor(public dialog: MatDialog) {
        this.episodes = [];
    }

    ngOnInit(): void {
        console.log('episode-list');
    }

    public openAddEpisodeDialog(): void {
        const dialogRef = this.dialog.open(EpisodeAddContainerComponent, {
            width: '90%',
        });
    }
}
