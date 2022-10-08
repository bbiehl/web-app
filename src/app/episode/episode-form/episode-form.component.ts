import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-episode-form',
    templateUrl: './episode-form.component.html',
    styleUrls: ['./episode-form.component.scss'],
})
export class EpisodeFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('episode-form');
    }
}
