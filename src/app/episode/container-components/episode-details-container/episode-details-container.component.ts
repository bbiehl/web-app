import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-episode-details-container',
    templateUrl: './episode-details-container.component.html',
    styleUrls: ['./episode-details-container.component.scss'],
})
export class EpisodeDetailsContainerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('episode-details-container');
    }
}
