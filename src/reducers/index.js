import { ADD_MOVIES, ADD_TO_FAVOURITS, REMOVE_FROM_FAVOURITS, SET_SHOW_FAVOURITES } from "../actions";


const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies (state = initialMoviesState, action) {
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

