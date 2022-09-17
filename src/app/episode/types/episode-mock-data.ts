import { Episode } from './episode.model';

export const EpisodeMockData: Episode[] = [
    {
        id: 'topGunMaverick',
        properties: {
            date: new Date('2022-06-14T00:00:00.000Z'),
            description:
                "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
            poster: 'https://www.imdb.com/title/tt1745960/mediaviewer/rm3294367489/?ref_=tt_ov_i',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000566452030',
                podBean: '',
                youTube: '',
            },
            title: 'Top Gun: Maverick',
            visible: true,
            year: '2022',
        },
    },
    {
        id: 'highlanderThereCanBeOnlyOne',
        properties: {
            date: new Date('2022-07-19T00:00:00.000Z'),
            description:
                'An immortal Scottish swordsman must confront the last of his immortal opponent, a murderously brutal barbarian who lusts for the fabled "Prize".',
            poster: 'https://www.imdb.com/title/tt0091203/mediaviewer/rm1279863552/?ref_=tt_ov_i',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000570542041',
                podBean: '',
                youTube: '',
            },
            title: 'Highlander',
            visible: true,
            year: '1986',
        },
    },
    {
        id: 'highlander2theQuickening',
        properties: {
            date: new Date('2022-08-03T00:00:00.000Z'),
            description: 'Analog Jones tries their best to understand this.',
            poster: 'https://www.imdb.com/title/tt0102034/mediaviewer/rm426385664/?ref_=tt_ov_i',
            links: {
                iHeartRadio: '',
                iTunes: 'https://podcasts.apple.com/us/podcast/analog-jones-and-the-temple-of-film-vhs-podcast/id1297464116?i=1000574963042',
                podBean: '',
                youTube: '',
            },
            title: 'Highlander 2: The Quickening',
            visible: true,
            year: '1991',
        },
    },
];
