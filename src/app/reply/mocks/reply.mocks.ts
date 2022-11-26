import { Reply } from '../models/reply.model';

export const mockReplies: Reply[] = [
    {
        id: 'reply0',
        properties: {
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Nibh praesent tristique magna sit amet purus gravida quis blandit. Id ornare arcu odio ut. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Volutpat ac tincidunt vitae semper quis lectus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Orci porta non pulvinar neque laoreet. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sit amet luctus venenatis lectus magna fringilla urna. Phasellus egestas tellus rutrum tellus pellentesque eu. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.`,
            commentId: 'comment9',
            date: new Date('2022-07-23T12:00:00.000Z'),
            replyToUserId: 'chim123',
            userId: 'brad123',
        },
    },
    {
        id: 'reply1',
        properties: {
            body: 'Fuck you buddy!',
            commentId: 'comment9',
            date: new Date('2022-07-23T12:00:00.000Z'),
            replyToUserId: 'brad123',
            userId: 'ken123',
        },
    },
];
