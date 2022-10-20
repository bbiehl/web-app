import { MockComments } from 'src/app/shared/types/comments-mock';
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
                applePodcasts: '',
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
                applePodcasts: '',
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
            comments: [MockComments[0], MockComments[1], MockComments[2]],
            date: new Date('2022-08-03T00:00:00.000Z'),
            description: `
Analog Jones tries their best to understand the magic behind Highlander II: The Quickening!

Quick Facts
Directed by Russell Mulcahy
Screenplay by Peter Bellwood
Story by Brian Clemens and William N. Panzer
Based on characters by Gregory Widen
Distributed by InterStar
Released on November 1, 1991
Budget: $34 million
Box Office: $15.6 million

Starring
Christopher Lambert as Connor MacLeod
Sean Connery as Juan Sánchez-Villalobos Ramírez
Virginia Madsen as Louise Marcus
Michael Ironside as General Katana
Allan Rich as Allan Neyman
John C. McGinley as David Blake

How to find Analog Jones
Discuss these movies and more on our Facebook page.

You can also listen to us on iTunes, iHeartRADIO, Podbean, and Youtube!
Please email us at analogjonestof@gmail.com with any comments or questions!

Brad says "Higlander 2 is better than Highlander, CHANGE MY MIND!"
            `,
            poster: 'https://m.media-amazon.com/images/M/MV5BOWY0ODFiNGQtZWQ2Yi00YTc0LWFhYTUtMmE3NGNhY2FhMmYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg   ',
            links: {
                applePodcasts:
                    'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000574963042',
                iHeartRadio: 'www.google.com',
                iTunes: 'www.google.com',
                podBean: 'www.google.com',
                youTube: 'www.google.com',
            },
            slug: 'highlander-2',
            title: 'Highlander 2: The Quickening',
            visible: true,
            year: '1991',
        },
    },
];
