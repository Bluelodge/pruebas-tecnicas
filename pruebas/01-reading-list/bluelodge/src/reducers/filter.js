import { updateFilterLocalStorage } from "../logic/localStorage"
import { FILTER_ACTION_TYPES } from "../constants/constants"

const UPDATE_FILTER_STATE_BY_ACTION = {
    [FILTER_ACTION_TYPES.UPDATE_GENRE_FILTER]: (state, action) => {
        const newState = {
            ...state,
            genreFilter: action.payload
        }

        updateFilterLocalStorage(newState)

        return newState
    },
    [FILTER_ACTION_TYPES.UPDATE_AUTHOR_FILTER]: (state, action) => {
        const newState = {
            ...state,
            authorFilter: action.payload
        }
        
        updateFilterLocalStorage(newState)

        return newState
    },
    [FILTER_ACTION_TYPES.UPDATE_PAGES_FILTER]: (state, action) => {
        const newState = {
            ...state,
            pagesFilter: action.payload
        }

        updateFilterLocalStorage(newState)

        return newState
    },
    [FILTER_ACTION_TYPES.UPDATE_YEAR_FILTER]: (state, action) => {
        const newState = {
            ...state,
            yearFilter: action.payload
        }

        updateFilterLocalStorage(newState)

        return newState
    }
}

export const filterReducer = (state, action) => {
    const { type: actionType } = action

    const updateFilter = UPDATE_FILTER_STATE_BY_ACTION[actionType]
    
    return updateFilter ? updateFilter(state, action) : state

}