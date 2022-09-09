import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-episode-add',
    templateUrl: './episode-add.component.html',
    styleUrls: ['./episode-add.component.scss'],
})
export class EpisodeAddComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('episode-add');
    }

    public createEpisode(): void {
        // dispatch action
        console.log('dispatch action to create episode');
    }
}
