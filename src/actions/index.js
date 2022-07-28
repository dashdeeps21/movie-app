// {
//     type: 'INCREASE_COUNT'
// }

// {
//     type: 'DECREASE_COUNT'
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITS = 'ADD_TO_FAVOURITS';
export const REMOVE_FROM_FAVOURITS = 'REMOVE_FROM_FAVOURIT';


// action creators
export function addMovies (movies) {
    return {
        
            type: ADD_MOVIES,
            movies: movies
    };
}


export function addFavourite (movie) {
    return {
        
            type: ADD_TO_FAVOURITS,
            movie
    };
}

export function removeFromFavourites (movie) {
    return {
        
            type: REMOVE_FROM_FAVOURITS,
            movie
    };
}