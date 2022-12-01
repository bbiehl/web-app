import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReplyService } from 'src/app/reply/services/reply.service';
import * as CommentActions from '../store/comment.actions';

@Component({
    selector: 'app-comment-reply',
    templateUrl: './comment-reply.component.html',
    styleUrls: ['./comment-reply.component.scss'],
})
export class CommentReplyComponent implements OnInit {
    formControl!: FormControl<string>;

    constructor(private fb: FormBuilder, private replyService: ReplyService, private store: Store) {}

    ngOnInit(): void {
        this.formControl = this.fb.nonNullable.control('');
    }

    public reset(): void {
        this.formControl.setValue('');
    }

    public quit(): void {
        this.store.dispatch(CommentActions.turnOffModes());
    }

    public save(): void {
        this.replyService.addReplyToComment(this.formControl.value);
        this.store.dispatch(CommentActions.turnOffModes());
    }
}
