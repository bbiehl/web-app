export interface User {
    id: string;
    properties: {
        email: string;
        isAdmin: boolean;
        password: string;
        joined: Date;
        userName: string;
    }
}