import { Comment } from '../models/comment.model';

export const mockComments: Comment[] = [
    {
        id: 'comment0',
        properties: {
            body: 'Totally Lame Episode',
            collection: 'episodes',
            date: new Date('2022-07-14T00:00:00.000Z'),
            postId: 'topGunMaverick',
            replyIds: [],
            userId: 'brad123',
        },
    },
    {
        id: 'comment1',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-15T00:00:00.000Z'),
            postId: 'topGunMaverick',
            replyIds: [],
            userId: 'steve123',
        },
    },
    {
        id: 'comment2',
        properties: {
            body: 'STOP TALKING ABOUT TRUMP!',
            collection: 'episodes',
            date: new Date('2022-07-16T00:00:00.000Z'),
            postId: 'topGunMaverick',
            replyIds: [],
            userId: 'chris123',
        },
    },
    {
        id: 'comment3',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-16T00:00:00.000Z'),
            postId: 'highlanderThereCanBeOnlyOne',
            replyIds: [],
            userId: 'chim123',
        },
    },
    {
        id: 'comment4',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-18T00:00:00.000Z'),
            postId: 'highlanderThereCanBeOnlyOne',
            replyIds: [],
            userId: 'chim123',
        },
    },
    {
        id: 'comment5',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-19T00:00:00.000Z'),
            postId: 'highlanderThereCanBeOnlyOne',
            replyIds: [],
            userId: 'chim123',
        },
    },
    {
        id: 'comment6',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-20T00:00:00.000Z'),
            postId: 'highlander2theQuickening',
            replyIds: [],
            userId: 'ken123',
        },
    },
    {
        id: 'comment7',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-21T00:00:00.000Z'),
            postId: 'highlander2theQuickening',
            replyIds: [],
            userId: 'ken123',
        },
    },
    {
        id: 'comment8',
        properties: {
            body: 'Hello FuckFaces',
            collection: 'episodes',
            date: new Date('2022-07-22T00:00:00.000Z'),
            postId: 'highlander2theQuickening',
            replyIds: [],
            userId: 'brad123',
        },
    },
    {
        id: 'comment9',
        properties: {
            body: 'TELL BRAD TO STOP TALKING ABOUT TRUMP!',
            collection: 'episodes',
            date: new Date('2022-07-23T00:00:00.000Z'),
            postId: 'highlander2theQuickening',
            replyIds: [],
            userId: 'chim123',
        },
    }
];
