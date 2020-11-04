import fetch from '../utils/fetchisomorphic';

export function getShowsAPI() {
    return fetch('https://api.tvmaze.com/shows?page=1', {
        method: 'GET'
    })
        .then(res => res.json())
        .catch(err => err);
}