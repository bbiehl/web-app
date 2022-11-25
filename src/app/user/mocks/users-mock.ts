import { User } from "../models/user.model";

export const mockUsers: User[] = [
    {
        id: 'brad123',
        properties: {
            email: 'bradley.biehl@gmail.com',
            isAdmin: true,
            password: 'fuck',
            joined: new Date(2022, 10, 1),
            userName: 'Vengeance Brad',
        }
    },
    {
        id: 'steve123',
        properties: {
            email: 'steve@test.com',
            isAdmin: true,
            password: 'dude',
            joined: new Date(2022, 10, 2),
            userName: 'Steve',
        }
    },
    {
        id: 'chris123',
        properties: {
            email: 'chris@test.com',
            isAdmin: true,
            password: 'meh',
            joined: new Date(2022, 10, 3),
            userName: 'Chris',
        }
    },
    {
        id: 'ken123',
        properties: {
            email: 'ken@test.com',
            isAdmin: false,
            password: 'blargh',
            joined: new Date(2022, 11, 1),
            userName: 'Ken Tremendous',
        }
    },
    {
        id: 'chim123',
        properties: {
            email: 'chim@test.com',
            isAdmin: false,
            password: 'blargh',
            joined: new Date(2022, 11, 2),
            userName: 'Chim Richalds',
        }
    },
]