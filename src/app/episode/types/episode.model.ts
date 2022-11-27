import { Comment, FullComment } from 'src/app/comment/models/comment.model';

export interface Episode {
    id: string;
    properties: {
        authorId: string;
        date: Date;
        description: string;
        poster: string;
        links: {
            applePodcasts?: string;
            iHeartRadio?: string;
            iTunes?: string;
            podBean?: string;
            youTube?: string;
        };
        slug: string;
        title: string;
        visible: boolean;
        year: string;
    };
}

export interface EpisodeFull {
    id?: string;
    properties?: {
        author?: string;
        comments?: FullComment[];
        date?: Date;
        description?: string;
        poster?: string;
        links?: {
            applePodcasts?: string;
            iHeartRadio?: string;
            iTunes?: string;
            podBean?: string;
            youTube?: string;
        };
        slug?: string;
        title?: string;
        visible?: boolean;
        year?: string;
    };
}
