import { FormControl } from '@angular/forms';

export interface EpisodeForm {
    date: FormControl<Date | null>;
    description: FormControl<string | null>;
    image: FormControl<string | null>;
    link: FormControl<string | null>;
    title: FormControl<string | null>;
    visible: FormControl<boolean>;
}
