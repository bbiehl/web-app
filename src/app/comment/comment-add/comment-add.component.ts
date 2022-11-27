import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { selectRouteParams } from 'src/app/router.selectors';
import { Categories } from 'src/app/shared/types/categories.enum';
import { Comment } from '../models/comment.model';

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

    constructor(private fb: FormBuilder, private store: Store) {
        this.commentFormControl = this.fb.nonNullable.control('');
    }

    ngOnInit(): void {
        this.store.select(selectRouteParams);
    }

    public addComment(comment: string): void {
        if (!!this.postId) {
            const payload: Comment = {
                id: 'generatedId42069',
                properties: {
                    body: comment,
                    collection: Categories.EPISODES,
                    date: new Date(),
                    postId: this.postId,
                    userId: this.userId,
                },
            };
            console.log(payload);
            this.commentFormControl.patchValue('');
        }
    }
}
