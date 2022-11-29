import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplyObject } from '../models/reply.model';
import * as ReplyActions from '../store/reply.actions';

@Component({
    selector: 'app-reply-list',
    templateUrl: './reply-list.component.html',
    styleUrls: ['./reply-list.component.scss'],
})
export class ReplyListComponent {
    @Input() replies: ReplyObject[] | undefined;

    constructor(private store: Store) {}

    public deleteMode(id: string): void {
        this.store.dispatch(ReplyActions.deleteReplyMode({ id }));
    }

    public editMode(id: string): void {
        this.store.dispatch(ReplyActions.editReplyMode({ id }));
    }

    public flagMode(id: string): void {
        this.store.dispatch(ReplyActions.flagReplyMode({ id }));
    }

    public closeModes(): void {
        this.store.dispatch(ReplyActions.turnOffReplyModes());
    }
}
