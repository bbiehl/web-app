import { FormArray, FormControl } from '@angular/forms';
import { UserComment } from 'src/app/comment/models/comment.model';

export interface EpisodeForm {
    date: FormControl<Date>;
    description: FormControl<string>;
    iHeartRadioLink: FormControl<string>;
    iTunesLink: FormControl<string>;
    podBeanLink: FormControl<string>;
    poster: FormControl<string>;
    title: FormControl<string>;
    visible: FormControl<boolean>;
    year: FormControl<string>;
    youTubeLink: FormControl<string>;
}
