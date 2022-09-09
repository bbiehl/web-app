import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../types/episode.model';

@Component({
    selector: 'app-episode-view',
    templateUrl: './episode-view.component.html',
    styleUrls: ['./episode-view.component.scss'],
})
export class EpisodeViewComponent implements OnInit {
    @Input() data!: Observable<Episode> | null;

    constructor() {}

    ngOnInit(): void {
        console.log('episode-view');
    }
}
