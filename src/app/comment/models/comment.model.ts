import { ReplyObject } from 'src/app/reply/models/reply.model';
import { User } from 'src/app/user/models/user.model';

export interface Comment {
    id: string;
    properties: {
        body: string;
        collection: string;
        date: Date;
        editedDate: Date | null;
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
        editedDate: Date | null;
        isFlagged: boolean;
        isInDeleteMode: boolean;
        isInEditMode: boolean;
        isInFlagMode: boolean;
        isInReplyMode: boolean;
        postId: string;
        replies: ReplyObject[];
        user?: User;
    };
}
