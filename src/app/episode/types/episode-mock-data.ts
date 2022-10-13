import { mockUsers } from 'src/app/shared/types/users-mock';
import { Episode } from './episode.model';

export const EpisodeMockData: Episode[] = [
    {
        id: 'topGunMaverick',
        properties: {
            author: mockUsers[0],
            comments: [],
            date: new Date('2022-06-14T00:00:00.000Z'),
            description:
                "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
            poster: 'https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.7273_AL_.jpg',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000566452030',
                podBean: '',
                youTube: '',
            },
            slug: 'top-gun-maveric',
            title: 'Top Gun: Maverick',
            visible: true,
            year: '2022',
        },
    },
    {
        id: 'highlanderThereCanBeOnlyOne',
        properties: {
            author: mockUsers[1],
            comments: [],
            date: new Date('2022-07-19T00:00:00.000Z'),
            description:
                'An immortal Scottish swordsman must confront the last of his immortal opponent, a murderously brutal barbarian who lusts for the fabled "Prize".',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjc3YmU3MzQtNTA4OC00ZjljLWFmODAtZDU1YzY5ZTNkZDU3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000570542041',
                podBean: '',
                youTube: '',
            },
            slug: 'highlander',
            title: 'Highlander',
            visible: true,
            year: '1986',
        },
    },
    {
        id: 'highlander2theQuickening',
        properties: {
            author: mockUsers[2],
            comments: [],
            date: new Date('2022-08-03T00:00:00.000Z'),
            description: 'Analog Jones tries their best to understand this.',
            poster: 'https://m.media-amazon.com/images/M/MV5BOWY0ODFiNGQtZWQ2Yi00YTc0LWFhYTUtMmE3NGNhY2FhMmYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg   ',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000574963042',
                podBean: '',
                youTube: '',
            },
            slug: 'highlander-2',
            title: 'Highlander 2: The Quickening',
            visible: true,
            year: '1991',
        },
    },
];
