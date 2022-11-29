import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReplyObject } from '../models/reply.model';
import { ReplyService } from '../services/reply.service';
import * as ReplyActions from '../store/reply.actions';

@Component({
    selector: 'app-reply-edit',
    templateUrl: './reply-edit.component.html',
    styleUrls: ['./reply-edit.component.scss'],
})
export class ReplyEditComponent implements OnInit {
    @Input() reply!: ReplyObject;
    formControl: FormControl<string>;

    constructor(private fb: FormBuilder, private replyService: ReplyService, private store: Store) {
        this.formControl = fb.nonNullable.control('');
    }

    ngOnInit(): void {
        this.formControl.setValue(this.reply.body);
    }

    public close(): void {
        this.store.dispatch(ReplyActions.turnOffReplyModes());
    }

    public reset(): void {
        this.formControl.setValue(this.reply.body);
    }

    public save(): void {
        this.replyService.editReply(this.formControl.value);
        this.store.dispatch(ReplyActions.turnOffReplyModes());
    }
}
