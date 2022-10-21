import { UserComment } from "./comment.model"
import { mockUsers } from "./users-mock"

export const MockComments: UserComment[] = [
    {
        comment: 'Totally Lame',
        date: new Date('2022-07-14T00:00:00.000Z'),
        replies: [
            {
                user: mockUsers[1],
                reply: 'Fuck you, you fucking fuck!'
            },
            {
                user: mockUsers[4],
                reply: 'Fuck you, you fucking fuck!'
            },
            {
                user: mockUsers[3],
                reply: 'Fuck you, you fucking fuck!'
            }
        ],
        user: mockUsers[0],
    },
    {
        comment: 'Totally Awesome',
        date: new Date('2022-07-15T00:00:00.000Z'),
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'STOP TALKING ABOUT TRUMP!',
        date: new Date('2022-07-16T00:00:00.000Z'),
        replies: [],
        user: mockUsers[4],
    },
    {
        comment: 'Brad is a Chad!',
        date: new Date('2022-07-17T00:00:00.000Z'),
        replies: [],
        user: mockUsers[1],
    },
    {
        comment: 'Shit Episode',
        date: new Date('2022-07-18T00:00:00.000Z'),
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'Stop Talking about Trump!',
        date: new Date('2022-07-19T00:00:00.000Z'),
        replies: [],
        user: mockUsers[4],
    },
    {
        comment: 'If Steve was a drag queen, his name would be Steve.',
        date: new Date('2022-07-20T00:00:00.000Z'),
        replies: [],
        user: mockUsers[2],
    },
    {
        comment: 'Great Episode',
        date: new Date('2022-07-14T00:00:00.000Z'),
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'Stop Talking about Trump!',
        date: new Date('2022-07-14T00:00:00.000Z'),
        replies: [],
        user: mockUsers[4],
    },
]
