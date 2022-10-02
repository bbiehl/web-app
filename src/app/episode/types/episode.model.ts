export interface Episode {
    id: string;
    properties: {
        author: string;
        date: Date;
        description: string;
        poster: string;
        links: {
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
