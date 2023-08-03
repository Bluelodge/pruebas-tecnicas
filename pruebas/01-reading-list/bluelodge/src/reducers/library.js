import { updateLibraryLocalStorage } from "../logic/localStorage"
import { LIBRARY_ACTION_TYPES } from "../constants/constants"

const UPDATE_LIBRARY_STATE_BY_ACTION = {
    [LIBRARY_ACTION_TYPES.SET_INITIAL_LIBRARY_LIST]: (state, action) => {
        if (state.availableList.length !== 0) return state

        const newState = {
            ...state,
            availableList: action.payload,
            totalAvailable: action.payload.length
        }

        updateLibraryLocalStorage(newState)

        return newState
    },
    [LIBRARY_ACTION_TYPES.ADD_TO_READING_LIST]: (state, action) => {
        const { id } = action.payload

        const newState = {
            ...state,
            readingList: [
            ...state.readingList,
            action.payload
            ],
            totalReading: state.totalReading + 1,
            availableList: state.availableList.filter(item => item.id != id),
            totalAvailable: state.totalAvailable - 1
        }

        updateLibraryLocalStorage(newState)

        return newState
    },
    [LIBRARY_ACTION_TYPES.REMOVE_FROM_READING_LIST]: (state, action) => {
        const { id } = action.payload
        
        const newState = {
            ...state,
            readingList: state.readingList.filter(items => items.id !== id),
            totalReading: state.totalReading - 1,
            availableList: [
                ...state.availableList,
                action.payload
            ],
            totalAvailable: state.totalAvailable + 1
        }

        updateLibraryLocalStorage(newState)

        return newState
    }
}

export const libraryReducer = (state, action) => {
    const { type: actionType } = action

    const updateLibrary = UPDATE_LIBRARY_STATE_BY_ACTION[actionType]

    return updateLibrary ? updateLibrary(state, action) : state

}
