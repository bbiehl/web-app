export interface Episode {
    id: string;
    properties: {
        authorId: string;
        date: Date;
        description: string;
        poster: string;
        links: {
            applePodcasts: string;
            iHeartRadio: string;
            iTunes: string;
            podBean: string;
            youTube: string;
        };
        slug: string;
        title: string;
        visible: boolean;
        year: string;
    };
}
