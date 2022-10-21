import { User } from "./user.model";

export interface UserComment {
    comment: string;
    date: Date;
    replies: Reply[];
    user: User;
}

export interface Reply {
    user: User;
    reply: string;
}

