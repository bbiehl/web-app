import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FullComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';
import * as CommentActions from '../store/comment.actions';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
    @Input() comments: FullComment[] | undefined;

    constructor(public commentService: CommentService, private store: Store) {}

    public openDeleteMode(comment: FullComment): void {
        this.store.dispatch(CommentActions.deleteCommentMode({ id: comment.id }));
    }

    public openEditMode(comment: FullComment): void {
        this.store.dispatch(CommentActions.editCommentMode({ id: comment.id }));
    }

    public openFlagMode(comment: FullComment): void {
        this.store.dispatch(CommentActions.flagCommentMode({ id: comment.id }));
    }

    public openReplyMode(comment: FullComment): void {
        this.store.dispatch(CommentActions.replyToCommentMode({ id: comment.id }));
    }

    public closeModes(): void {
        this.store.dispatch(CommentActions.turnOffModes());
    }
}
