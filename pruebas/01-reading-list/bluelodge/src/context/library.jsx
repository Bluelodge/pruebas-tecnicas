import { createContext, useReducer } from "react"
import { libraryReducer } from "../reducers/library"
import { libraryInitialState } from "../logic/localStorage"

// Context for Reading List
export const ReadingContext = createContext()

// Provider for Reading List
export function ReadingProvider({ children }) {
    const [state, dispatch] = useReducer(libraryReducer, libraryInitialState)
    
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
