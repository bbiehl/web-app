import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockReplies } from '../mocks/reply.mocks';
import { Reply } from '../models/reply.model';

@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    constructor() {}

    public getReplies(): Observable<Reply[]> {
        return of(mockReplies);
    }
}
