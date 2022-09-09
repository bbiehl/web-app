import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EpisodeAddComponent } from '../episode-add/episode-add.component';

@Component({
    selector: 'app-episode-list',
    templateUrl: './episode-list.component.html',
    styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        console.log('episode-list');
    }

    public openAddEpisodeDialog(): void {
        const dialogRef = this.dialog.open(EpisodeAddComponent, {
            width: '90%',
        });
    }
}
