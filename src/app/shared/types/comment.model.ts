import { LookupObject } from "./lookup-object.model";
import { User } from "./user.model";

export interface UserComment {
    comment: string;
    id: string;
    lookupObject: LookupObject;
    user: User
}


