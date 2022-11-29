import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockReplies } from '../mocks/reply.mocks';
import { ReplyEntity } from '../models/reply.model';

@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    constructor() {}

    public getReplies(): Observable<ReplyEntity[]> {
        return of(mockReplies);
    }
}
