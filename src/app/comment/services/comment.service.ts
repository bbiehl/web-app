import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockComments } from '../mocks/comments-mock';
import { Comment } from '../models/comment.model';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor() {}

    public getComments(): Observable<Comment[]> {
        return of(mockComments);
    }
}
