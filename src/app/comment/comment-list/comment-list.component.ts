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

    public openFlagComment(comment: FullComment): void {
        this.store.dispatch(CommentActions.flagCommentOn({ id: comment.id }));
    }

    public closeFlagComment(): void {
        this.store.dispatch(CommentActions.flagCommentOff());
    }

    public openCommentEdit(comment: FullComment): void {
        this.store.dispatch(CommentActions.editCommentOn({ id: comment.id }));
    }

    public closeCommentEdit(): void {
        this.store.dispatch(CommentActions.editCommentOff());
    }
}
