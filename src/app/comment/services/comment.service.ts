import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mockComments } from '../mocks/comments-mock';
import { Comment } from '../models/comment.model';
import { NewCommentPayload } from '../models/new-comment.model';
import * as CommentActions from '../store/comment.actions';
import { selectCurrentComment } from '../store/comment.selectors';

@UntilDestroy()
@Injectable({
    providedIn: 'root',
})
export class CommentService {
    selectedComment: Comment | undefined;

    constructor(private store: Store) {
        this.store
            .select(selectCurrentComment)
            .pipe(untilDestroyed(this))
            .subscribe((comment) => {
                this.selectedComment = comment;
            });
    }

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

    public flagComment(): void {
        if (!!this.selectedComment) {
            const payload: Comment = {
                id: this.selectedComment.id,
                properties: {
                    body: this.selectedComment.properties.body,
                    collection: this.selectedComment.properties.collection,
                    date: this.selectedComment.properties.date,
                    editedDate: this.selectedComment.properties.editedDate,
                    isFlagged: true,
                    postId: this.selectedComment.properties.postId,
                    userId: this.selectedComment.properties.userId,
                },
            };
            console.log(payload);
            this.store.dispatch(CommentActions.turnOffModes());
        }
    }

    public editComment(update: string): void {
        if (!!this.selectedComment) {
            const payload: Comment = {
                id: this.selectedComment.id,
                properties: {
                    body: update,
                    collection: this.selectedComment.properties.collection,
                    date: this.selectedComment.properties.date,
                    editedDate: new Date(),
                    isFlagged: this.selectedComment.properties.isFlagged,
                    postId: this.selectedComment.properties.postId,
                    userId: this.selectedComment.properties.userId,
                },
            };
            console.log(payload);
        }
    }

    public deleteComment(): void {
        if (!!this.selectedComment) {
            console.log(`Delete: ${this.selectedComment.id}`);
        }
    }
}
