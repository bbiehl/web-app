export interface ImdbMovie {
    title: string;
    year: string;
    image: string;
    releaseDate: string;
    runtimeMins: string;
    plot: string;
    awards: string;
    directorList: DirectorList[];
    writerList: WriterList[];
    actorList: ActorList[];
    companyList: CompanyList[];
    contentRating: string;
    countryList: CountryList[];
    ratings: {
        imDb: string;
        metacritic: string;
        theMovieDb: string;
        rottenTomatoes: string;
        filmAffinity: string;
    };
    wikipedia: {
        url: string;
        plotShort: {
            plainText: string;
        };
    };
    trailer: {
        thunbnailUrl: string;
        link: string;
        linkEmbed: string;
    };
    boxOffice: {
        budget: string;
        openingWeekendUSA: string;
        grossUSA: string;
        cumulativeWorldwideGross: string;
    };
};

interface DirectorList {
    id: string;
    name: string;
}

interface WriterList {
    id: string;
    name: string;
}

interface ActorList {
    id: string;
    image: string;
    name: string;
    asCharacter: string;
}

interface CompanyList {
    id: string;
    name: string;
}

interface CountryList {
    key: string;
    value: string;
}
