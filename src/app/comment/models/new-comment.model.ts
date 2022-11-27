export interface NewCommentPayload {
    body: string;
    collection: string;
    date: Date;
    postId: string;
    userId: string;
}