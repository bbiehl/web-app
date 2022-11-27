import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { selectRouteParams } from 'src/app/router.selectors';
import { Categories } from 'src/app/shared/types/categories.enum';
import { Comment } from '../models/comment.model';
import { NewCommentPayload } from '../models/new-comment.model';
import { CommentService } from '../services/comment.service';

@UntilDestroy()
@Component({
    selector: 'app-comment-add',
    templateUrl: './comment-add.component.html',
    styleUrls: ['./comment-add.component.scss'],
})
export class CommentAddComponent implements OnInit {
    @Input() postId?: string;
    userId: string = 'blargh';
    commentFormControl: FormControl<string>;

    constructor(private commentService: CommentService, private fb: FormBuilder, private store: Store) {
        this.commentFormControl = this.fb.nonNullable.control('');
    }

    ngOnInit(): void {
        this.store.select(selectRouteParams);
    }

    public addComment(comment: string): void {
        if (!!this.postId) {
            const payload: NewCommentPayload = {
                body: comment,
                collection: Categories.EPISODES,
                date: new Date(),
                isFlagged: false,
                postId: this.postId,
                userId: this.userId,
            };
            this.commentService.addComment(payload);
            this.commentFormControl.patchValue('');
        }
    }
}
