import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Comment } from 'src/app/comment/models/comment.model';
import { selectCurrentComment } from 'src/app/comment/store/comment.selectors';
import { User } from 'src/app/user/models/user.model';
import { selectCurrentUser, selectUserState } from 'src/app/user/store/user.selectors';
import { mockReplies } from '../mocks/reply.mocks';
import { ReplyEntity } from '../models/reply.model';
import { selectCurrentReply, selectReplyState } from '../store/reply.selectors';

@UntilDestroy()
@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    selectedComment!: Comment | undefined;
    selectedReply!: ReplyEntity | undefined;
    currentUser!: User | undefined;

    constructor(private store: Store) {
        this.store.select(selectCurrentComment).pipe(untilDestroyed(this)).subscribe(comment => {
            this.selectedComment = comment;
        })
        this.store.select(selectCurrentUser).pipe(untilDestroyed(this)).subscribe(user => {
            this.currentUser = user;
        })
        this.store.select(selectCurrentReply).pipe(untilDestroyed(this)).subscribe(reply => {
            this.selectedReply = reply;
        })
    }

    public getReplies(): Observable<ReplyEntity[]> {
        return of(mockReplies);
    }

    public addReplyToComment(reply: string): void {
        const payload: ReplyEntity = {
            id: 'blarg',
            properties: {
                body: reply,
                commentId: this.selectedComment!?.id,
                date: new Date(),
                editedDate: null,
                isFlagged: false,
                replyToUserId: this.selectedComment!?.properties.userId,
                userId: this.currentUser!?.id
            },
        };
        console.log(payload);
    }

    public editReplyToComment(reply: string): void {
        console.log(reply);
    }
}
