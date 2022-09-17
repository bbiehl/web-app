import { UserComment } from "./comment.model"
import { mockUsers } from "./users-mock"

export const MockComments: UserComment[] = [
    {
        id: 'a0',
        comment: 'Totally Lame',
        lookupObject: {
            collection: 'episodes',
            id: 'topGunMaverick',
        },
        user: mockUsers[0],
    },
    {
        id: 'a1',
        comment: 'Totally Awesome',
        lookupObject: {
            collection: 'episodes',
            id: 'topGunMaverick',
        },
        user: mockUsers[3],
    },
    {
        id: 'a2',
        comment: 'STOP TALKING ABOUT TRUMP!',
        lookupObject: {
            collection: 'episodes',
            id: 'topGunMaverick',
        },
        user: mockUsers[4],
    },
    {
        id: 'b0',
        comment: 'Brad is a Chad!',
        lookupObject: {
            collection: 'episodes',
            id: 'highlanderThereCanBeOnlyOne',
        },
        user: mockUsers[1],
    },
    {
        id: 'b1',
        comment: 'Shit Episode',
        lookupObject: {
            collection: 'episodes',
            id: 'highlanderThereCanBeOnlyOne',
        },
        user: mockUsers[3],
    },
    {
        id: 'b2',
        comment: 'Stop Talking about Trump!',
        lookupObject: {
            collection: 'episodes',
            id: 'highlanderThereCanBeOnlyOne',
        },
        user: mockUsers[4],
    },
    {
        id: 'c0',
        comment: 'If Steve was a drag queen, his name would be Steve.',
        lookupObject: {
            collection: 'episodes',
            id: 'highlander2theQuickening',
        },
        user: mockUsers[2],
    },
    {
        id: 'c1',
        comment: 'Great Episode',
        lookupObject: {
            collection: 'episodes',
            id: 'highlander2theQuickening',
        },
        user: mockUsers[3],
    },
    {
        id: 'c2',
        comment: 'Stop Talking about Trump!',
        lookupObject: {
            collection: 'episodes',
            id: 'highlander2theQuickening',
        },
        user: mockUsers[4],
    },
]
