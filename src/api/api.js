import {config} from "./config";

export function getPopularMovies() {
    return fetch(`${config.baseUrl}/v2.2/films/collections?type=TOP_POPULAR_MOVIES`).then(res => res.json())
}


