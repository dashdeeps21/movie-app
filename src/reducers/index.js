import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_TO_FAVOURITS, REMOVE_FROM_FAVOURITS, SET_SHOW_FAVOURITES } from "../actions";


const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
};
export  function movies (state = initialMoviesState, action) {
    console.log('MOVIES REDUCER');
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_TO_FAVOURITS:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        case REMOVE_FROM_FAVOURITS:
            const filteredArray = state.favourites.filter(
                movie => movie.TItle !== action.TItle
            );
            return {
                ...state,
                favourites: filteredArray
            }

        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
};
export function search (state = initialSearchState, action) {
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootstate = {
    movies: initialMoviesState,
    search: initialSearchState
};

// export default function rootReducer (state = initialRootstate, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }


export default combineReducers({
    movies: movies,
    search: search
})