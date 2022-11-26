import { User } from 'src/app/user/models/user.model';

export interface Reply {
    id: string;
    properties: {
        body: string;
        commentId: string;
        date: Date;
        replyToUserId: string;
        userId: string;
    };
}

export interface ReplyFull {
    id: string;
    properties: {
        body: string;
        commentId: string;
        date: Date;
        replyToUser?: User;
        user?: User;
    };
}
