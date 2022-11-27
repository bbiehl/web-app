export interface NewCommentPayload {
    body: string;
    collection: string;
    date: Date;
    isFlagged: boolean;
    postId: string;
    userId: string;
}