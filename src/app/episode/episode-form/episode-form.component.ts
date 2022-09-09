import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EpisodeForm } from '../types/episode-form.model';
import { Episode } from '../types/episode.model';

@Component({
    selector: 'app-episode-form',
    templateUrl: './episode-form.component.html',
    styleUrls: ['./episode-form.component.scss'],
})
export class EpisodeFormComponent implements OnInit {
    @Input() data!: Observable<Episode> | null;
    episodeForm: FormGroup<EpisodeForm>;

    constructor() {
        this.episodeForm = new FormGroup<EpisodeForm>({
            date: new FormControl(new Date(), Validators.required),
            description: new FormControl('', Validators.required),
            image: new FormControl('', Validators.required),
            link: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            visible: new FormControl(false, {nonNullable: true}),
        });
    }

    ngOnInit(): void {
        console.log('episode-form');
    }
}
