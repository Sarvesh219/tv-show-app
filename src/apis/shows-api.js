import fetch from '../utils/fetchisomorphic';

export function getShowsAPI() {
    return fetch(`http://api.tvmaze.com/shows?page=1`, {
        method: 'GET'
    })
        .then(res => res.json())
        .catch(err => err);
}