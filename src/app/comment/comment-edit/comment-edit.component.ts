import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FullComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';
import * as CommentActions from '../store/comment.actions';

@Component({
    selector: 'app-comment-edit',
    templateUrl: './comment-edit.component.html',
    styleUrls: ['./comment-edit.component.scss'],
})
export class CommentEditComponent implements OnInit {
    @Input() comment!: FullComment;
    commentFormControl: FormControl<string>;

    constructor(private fb: FormBuilder, private commentService: CommentService, private store: Store) {
        this.commentFormControl = this.fb.nonNullable.control('');
    }

    ngOnInit(): void {
        this.commentFormControl.patchValue(this.comment.properties.body);
    }

    public quit(): void {
        this.store.dispatch(CommentActions.turnOffModes());
    }

    public undo(): void {
        this.commentFormControl.setValue(this.comment.properties.body);
    }

    public save(): void {
        this.commentService.editComment(this.commentFormControl.value);
        this.store.dispatch(CommentActions.turnOffModes());
    }
}
