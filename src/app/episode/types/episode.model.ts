import { UserComment } from 'src/app/shared/types/comment.model';
import { User } from 'src/app/shared/types/user.model';

export interface Episode {
    id: string;
    properties: {
        author: User;
        comments: UserComment[];
        date: Date;
        description: string;
        poster: string;
        links: {
            applePodcasts: string;
            iHeartRadio: string;
            iTunes: string;
            podBean: string;
            youTube: string;
        };
        slug: string;
        title: string;
        visible: boolean;
        year: string;
    };
}
