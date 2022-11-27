import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { FullComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';
import { editCommentOff, editCommentOn } from '../store/comment.actions';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
    @Input() comments: FullComment[] | undefined;

    constructor(private commentService: CommentService, private store: Store) {}

    public flagComment(comment: FullComment): void {
        this.commentService.flagComment(comment);
    }

    public openCommentEdit(comment: FullComment): void {
        this.store.dispatch(editCommentOn({ id: comment.id }));
    }

    public closeCommentEdit(): void {
        this.store.dispatch(editCommentOff());
    }
}
