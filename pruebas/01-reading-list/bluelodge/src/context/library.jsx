import { createContext, useReducer } from "react"

// Initial state for library list and reading list
const initialState = {
    readingList: JSON.parse(window.localStorage.getItem('reading_list')) || [],
    totalReading: JSON.parse(window.localStorage.getItem('total_reading')) || 0,
    availableList: JSON.parse(window.localStorage.getItem('available_list')) || [],
    totalAvailable: JSON.parse(window.localStorage.getItem('total_available')) || 0
}

const updateLocalStorage = state => {
    window.localStorage.setItem('reading_list', JSON.stringify(state.readingList))
    window.localStorage.setItem('total_reading', JSON.stringify(state.totalReading))
    window.localStorage.setItem('available_list', JSON.stringify(state.availableList))
    window.localStorage.setItem('total_available', JSON.stringify(state.totalAvailable))
}

// Global state
const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType){
        case 'SET_INITIAL_LIBRARY_LIST': {
            if (state.availableList.length !== 0) return state

            const newState = {
                ...state,
                availableList: actionPayload,
                totalAvailable: actionPayload.length
            }

            updateLocalStorage(newState)

            return newState
        }

        case 'ADD_TO_READING_LIST': {
            const { id } = actionPayload

            const newState = {
                ...state,
                readingList: [
                ...state.readingList,
                actionPayload
                ],
                totalReading: state.totalReading + 1,
                availableList: state.availableList.filter(item => item.id != id),
                totalAvailable: state.totalAvailable - 1
            }

            updateLocalStorage(newState)

            return newState
        }

        case 'REMOVE_FROM_READING_LIST': {
            const { id } = actionPayload
            
            const newState = {
                ...state,
                readingList: state.readingList.filter(items => items.id !== id),
                totalReading: state.totalReading - 1,
                availableList: [
                    ...state.availableList,
                    actionPayload
                ],
                totalAvailable: state.totalAvailable + 1
            }

            updateLocalStorage(newState)

            return newState
        }
    }

    return state
}

// Context for Reading List
export const ReadingContext = createContext()

// Provider for Reading List
export function ReadingProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const setInitialLibrary = library => dispatch({
        type: 'SET_INITIAL_LIBRARY_LIST',
        payload: library
    })
    
    const addToReadingList = book => dispatch({
        type: 'ADD_TO_READING_LIST',
        payload: book
    })

    const removeFromReadingList = book => dispatch({
        type: 'REMOVE_FROM_READING_LIST',
        payload: book
    })

    return (
        <ReadingContext.Provider value={{
            commercialLibrary: state.availableList,
            personalLibrary: state.readingList,
            totalComercial: state.totalAvailable,
            totalPersonal: state.totalReading,
            setInitialLibrary,
            addToReadingList,
            removeFromReadingList
        }}>
            {children}
        </ReadingContext.Provider>
    )
}
