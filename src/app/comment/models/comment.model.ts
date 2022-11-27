import { ReplyFull } from 'src/app/reply/models/reply.model';
import { User } from 'src/app/user/models/user.model';

export interface Comment {
    id: string;
    properties: {
        body: string;
        collection: string;
        date: Date;
        isFlagged: boolean;
        postId: string;
        userId: string;
    };
}

export interface FullComment {
    id: string;
    properties: {
        body: string;
        collection: string;
        date: Date;
        isFlagged: boolean;
        postId: string;
        replies: ReplyFull[];
        user?: User;
    };
}
