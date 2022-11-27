import { Component, Input } from '@angular/core';
import { FullComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
    @Input() comments: FullComment[] | undefined;

    constructor(private commentService: CommentService) {}

    public flagComment(comment: FullComment): void {
        this.commentService.flagComment(comment);
    }

    public openCommentEdit(comment: FullComment): void {}
}
