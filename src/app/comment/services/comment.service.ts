import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockComments } from '../mocks/comments-mock';
import { Comment, FullComment } from '../models/comment.model';
import { NewCommentPayload } from '../models/new-comment.model';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor() {}

    public getComments(): Observable<Comment[]> {
        return of(mockComments);
    }

    public addComment(newCommentPayload: NewCommentPayload): void {
        const payload: Comment = {
            id: 'blargh',
            properties: {
                ...newCommentPayload,
            },
        };
        console.log(payload);
    }

    public flagComment(flaggedCommentPayload: FullComment): void {
        const payload: Comment = {
            id: flaggedCommentPayload.id,
            properties: {
                body: flaggedCommentPayload.properties.body,
                collection: flaggedCommentPayload.properties.collection,
                date: flaggedCommentPayload.properties.date,
                isFlagged: true,
                postId: flaggedCommentPayload.properties.postId,
                userId: flaggedCommentPayload.properties.user!.id,
            },
        };
        console.log(payload);
    }
}
