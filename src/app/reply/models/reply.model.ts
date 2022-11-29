import { User } from 'src/app/user/models/user.model';

export interface ReplyEntity {
    id: string;
    properties: {
        body: string;
        commentId: string;
        date: Date;
        editedDate: Date | null;
        isFlagged: boolean;
        replyToUserId: string;
        userId: string;
    };
}

export interface ReplyObject {
    id: string;
    properties: {
        body: string;
        commentId: string;
        date: Date;
        editedDate: Date | null;
        isDeleteMode: boolean;
        isEditMode: boolean;
        isFlagMode: boolean;
        isFlagged: boolean;
        replyToUser?: User;
        user?: User;
    };
}
