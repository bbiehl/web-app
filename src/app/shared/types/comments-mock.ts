import { UserComment } from "./comment.model"
import { mockUsers } from "./users-mock"

export const MockComments: UserComment[] = [
    {
        comment: 'Totally Lame',
        replies: [],
        user: mockUsers[0],
    },
    {
        comment: 'Totally Awesome',
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'STOP TALKING ABOUT TRUMP!',
        replies: [],
        user: mockUsers[4],
    },
    {
        comment: 'Brad is a Chad!',
        replies: [],
        user: mockUsers[1],
    },
    {
        comment: 'Shit Episode',
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'Stop Talking about Trump!',
        replies: [],
        user: mockUsers[4],
    },
    {
        comment: 'If Steve was a drag queen, his name would be Steve.',
        replies: [],
        user: mockUsers[2],
    },
    {
        comment: 'Great Episode',
        replies: [],
        user: mockUsers[3],
    },
    {
        comment: 'Stop Talking about Trump!',
        replies: [],
        user: mockUsers[4],
    },
]
