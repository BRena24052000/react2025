import {ApiConfig} from "./config";

export function getPopularMovies() {
    return fetch(`${ApiConfig.baseUrl}/v2.2/films/collections?type=TOP_POPULAR_MOVIES`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': ApiConfig.apiKey
        }
    }).then(res => res.json()) 
}

export function getReleasesMovies() {
    return fetch(`${ApiConfig.baseUrl}/v2.2/films/collections?type=CLOSES_RELEASES`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': ApiConfig.apiKey
        }
    }).then(res => res.json())
}


export function getGenres() {
    return fetch(`${ApiConfig.baseUrl}/v2.2/films/filters`, {
        method: "GET", 
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': ApiConfig.apiKey

        }
    }).then(res=>res.json())
}

export function getGenresThriller() {
    return fetch(`${ApiConfig.baseUrl}/v2.2/films?genres=1`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': ApiConfig.apiKey
        }
    }).then(res => res.json())
}

export function getFilmsByGenre(genreId) {
    return fetch(`${ApiConfig.baseUrl}/v2.2/films?genres=${genreId}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': ApiConfig.apiKey
        }
    }).then(res => res.json())
}

export function getFilmsNew() {
    const date = new Date();

    const year = date.getFullYear();

    const monthNames = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ]

    const month = monthNames[date.getMonth()]; 

    return fetch(`${ApiConfig.baseUrl}/v2.2/films/premieres?year=${year}&month=${month}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY':  ApiConfig.apiKey
        }
    }).then(res => res.json())
}
