import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    yearPattern = /\d{3}/;

    constructor(private fb: FormBuilder) {
        this.episodeForm = this.fb.group<EpisodeForm>({
            date: this.fb.nonNullable.control(new Date(), Validators.required),
            description: this.fb.nonNullable.control('', Validators.required),
            iHeartRadioLink: this.fb.nonNullable.control('', Validators.required),
            iTunesLink: this.fb.nonNullable.control('', Validators.required),
            podBeanLink: this.fb.nonNullable.control('', Validators.required),
            poster: this.fb.nonNullable.control('', Validators.required),
            title: this.fb.nonNullable.control('', Validators.required),
            visible: this.fb.nonNullable.control(false, Validators.required),
            year: this.fb.nonNullable.control('', [Validators.required, Validators.pattern(this.yearPattern)]),
            youTubeLink: this.fb.nonNullable.control('', Validators.required),
        });
    }

    ngOnInit(): void {
        console.log('episode-form');
    }
}
