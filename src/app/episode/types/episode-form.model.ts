import { FormControl } from '@angular/forms';

export interface EpisodeForm {
    date: FormControl<Date | null>;
    description: FormControl<string | null>;
    id?: FormControl<string>;
    title: FormControl<string | null>;
}
