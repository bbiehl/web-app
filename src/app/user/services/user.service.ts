import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockUsers } from '../mocks/users-mock';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() {}

    public getUsers(): Observable<User[]> {
        return of(mockUsers);
    }
}
