import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-episode-add-container',
    templateUrl: './episode-add-container.component.html',
    styleUrls: ['./episode-add-container.component.scss'],
})
export class EpisodeAddContainerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('episode-add-container');
    }
}
