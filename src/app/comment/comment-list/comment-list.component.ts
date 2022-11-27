import { Component, Input } from '@angular/core';
import { FullComment } from '../models/comment.model';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent {
    @Input() comments: FullComment[] | undefined;

    constructor() {}

    public openCommentEdit(comment: FullComment): void {

    }
}
