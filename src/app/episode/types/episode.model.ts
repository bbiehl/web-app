
export interface Episode {
    id: string;
    properties: {
        date: Date;
        description: string;
        genres: string[];
        poster: string;
        links: {
            iHeartRadio: string;
            iTunes: string;
            podBean: string;
            youTube: string;
        };
        title: string;
        year: number;
    };
}
