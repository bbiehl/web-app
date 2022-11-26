import { Component, Input } from '@angular/core';
import { ReplyFull } from '../models/reply.model';

@Component({
    selector: 'app-reply-list',
    templateUrl: './reply-list.component.html',
    styleUrls: ['./reply-list.component.scss'],
})
export class ReplyListComponent {
    @Input() replies: ReplyFull[] | undefined;

    constructor() {}
}
