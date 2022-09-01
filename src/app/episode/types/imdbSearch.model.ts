// models what we get back from imdb-api
export interface ImdbMovieSearch {
    searchType: string;
    expression: string;
    results: MovieSearchResult[];
    errorMessage: string;
}

// models what we want to see in the component
export interface MovieSearchResult {
    id: string;
    resultType: string;
    image: string;
    title: string;
    description: string;
}
