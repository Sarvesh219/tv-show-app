import {
    GET_SHOWS_FAILED,
    GET_SHOWS_INIT,
    GET_SHOWS_SUCCESS,
    TOGGLE_FAVORITE
} from '../actions/constants';

export const initialState = {
    showsList: [],
    getShowsStatus: undefined
};

const handlers = {
    [GET_SHOWS_INIT]: state => ({
        ...state,
        getShowsStatus: 'started'
    }),
    [GET_SHOWS_SUCCESS]: (state, action) => {
        const newShowsList = [];
        action.response.slice(0, 25).forEach(item => {
            newShowsList.push({ ...item, isFavorite: false });
        });
        return {
            ...state,
            showsList: newShowsList,
            getShowsStatus: 'success'
        }
    },
    [GET_SHOWS_FAILED]: state => ({
        ...state,
        getShowsStatus: 'failed'
    }),
    [TOGGLE_FAVORITE]: (state, action) => {
        const { id } = action.body;
        const matchedArr = [];
        state.showsList.forEach(item => {
            if (item.id === id) {
                matchedArr.push(item);
            }
        });
        const index = state.showsList.indexOf(matchedArr[0]);
        const newShowsList = [...state.showsList];
        if (index !== -1) {
            const newItem = { ...action.body };
            newItem.isFavorite = !action.body.isFavorite;
            newShowsList[index] = newItem;
        }
        alert(!action.body.isFavorite ? 'Added to favorites!' : 'Removed from favorites!')
        return {
            ...state,
            showsList: newShowsList
        }
    }
};

export default function showsReducer(state = initialState, action) {
    const handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
  }