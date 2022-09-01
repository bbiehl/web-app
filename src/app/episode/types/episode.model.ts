import { ImdbMovie } from './imdbMovie.model';

export interface Episode {
    date: Date;
    description: string;
    id: string;
    title: string;
    imdbProperties: ImdbMovie;
}
