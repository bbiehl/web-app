export interface Comment {
    id: string;
    properties: {
        body: string;
        collection: string;
        date: Date;
        postId: string;
        replyIds: string[];
        userId: string;
    };
}
