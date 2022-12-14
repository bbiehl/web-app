import { Comment } from '../models/comment.model';

export const mockComments: Comment[] = [
    {
        id: 'comment0',
        properties: {
            body: 'Totally Lame Episode',
            collection: 'episodes',
            date: new Date('2022-07-14T00:00:00.000Z'),
            editedDate: new Date('2022-07-14T00:00:00.000Z'),
            isFlagged: false,
            postId: 'topGunMaverick',
            userId: 'brad123',
        },
    },
    {
        id: 'comment1',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-15T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'topGunMaverick',
            userId: 'steve123',
        },
    },
    {
        id: 'comment2',
        properties: {
            body: 'STOP TALKING ABOUT TRUMP!',
            collection: 'episodes',
            date: new Date('2022-07-16T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'topGunMaverick',
            userId: 'chris123',
        },
    },
    {
        id: 'comment3',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-16T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'highlanderThereCanBeOnlyOne',
            userId: 'brad123',
        },
    },
    {
        id: 'comment4',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-18T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'highlanderThereCanBeOnlyOne',
            userId: 'chim123',
        },
    },
    {
        id: 'comment5',
        properties: {
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Nibh praesent tristique magna sit amet purus gravida quis blandit. Id ornare arcu odio ut. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Volutpat ac tincidunt vitae semper quis lectus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Orci porta non pulvinar neque laoreet. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sit amet luctus venenatis lectus magna fringilla urna. Phasellus egestas tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.`,
            collection: 'episodes',
            date: new Date('2022-07-19T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'highlanderThereCanBeOnlyOne',
            userId: 'chim123',
        },
    },
    {
        id: 'comment6',
        properties: {
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat id porta nibh venenatis cras sed felis eget velit. Non sodales neque sodales ut etiam sit amet nisl purus. Cursus turpis massa tincidunt dui ut. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Lectus urna duis convallis convallis tellus id interdum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Purus ut faucibus pulvinar elementum integer enim neque. Aliquet lectus proin nibh nisl condimentum id venenatis. Nam aliquam sem et tortor consequat id. In ante metus dictum at tempor commodo ullamcorper a lacus.`,
            collection: 'episodes',
            date: new Date('2022-07-20T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'highlander2theQuickening',
            userId: 'ken123',
        },
    },
    {
        id: 'comment7',
        properties: {
            body: 'I actually liked that episode',
            collection: 'episodes',
            date: new Date('2022-07-21T00:00:00.000Z'),
            editedDate: null,
            isFlagged: false,
            postId: 'highlander2theQuickening',
            userId: 'ken123',
        },
    },
    {
        id: 'comment8',
        properties: {
            body: 'Hello FuckFaces',
            collection: 'episodes',
            date: new Date('2022-07-22T00:00:00.000Z'),
            editedDate: null,
            isFlagged: true,
            postId: 'highlander2theQuickening',
            userId: 'brad123',
        },
    },
    {
        id: 'comment9',
        properties: {
            body: 'TELL BRAD TO STOP TALKING ABOUT TRUMP!',
            collection: 'episodes',
            date: new Date('2022-07-23T11:00:00.000Z'),
            editedDate: new Date('2022-07-23T11:00:00.000Z'),
            isFlagged: false,
            postId: 'highlander2theQuickening',
            userId: 'chim123',
        },
    },
];
