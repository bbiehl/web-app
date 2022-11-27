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
                editedDate: null,
                isFlagged: false,
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
                editedDate: flaggedCommentPayload.properties.editedDate,
                isFlagged: true,
                postId: flaggedCommentPayload.properties.postId,
                userId: flaggedCommentPayload.properties.user!.id,
            },
        };
        console.log(payload);
    }

    public editComment(comment: FullComment, update: string): void {
        const payload: Comment = {
            id: comment.id,
            properties: {
                body: update,
                collection: comment.properties.collection,
                date: comment.properties.date,
                editedDate: new Date(),
                isFlagged: comment.properties.isFlagged,
                postId: comment.properties.postId,
                userId: comment.properties.user!.id,
            },
        };
        console.log(payload);
    }
}
