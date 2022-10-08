import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-episode-overview',
    templateUrl: './episode-overview.component.html',
    styleUrls: ['./episode-overview.component.scss'],
})
export class EpisodeOverviewComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('episode-overview');
    }
}
