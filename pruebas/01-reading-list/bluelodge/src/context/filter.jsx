import { createContext, useReducer } from "react"

const initialState = {
    genreFilter: JSON.parse(window.localStorage.getItem('genre_filter')) || 'all',
    pagesFilter: JSON.parse(window.localStorage.getItem('pages_filter')) || 0,
    yearFilter: JSON.parse(window.localStorage.getItem('year_filter')) || 1800,
    authorFilter: JSON.parse(window.localStorage.getItem('author_filter')) || 'all'
}

const updateFilterLocalStorage = state => {
    window.localStorage.setItem('genre_filter', JSON.stringify(state.genreFilter))
    window.localStorage.setItem('pages_filter', JSON.stringify(state.pagesFilter))
    window.localStorage.setItem('year_filter', JSON.stringify(state.yearFilter))
    window.localStorage.setItem('author_filter', JSON.stringify(state.authorFilter))
}

const reducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    if (actionType === 'UPDATE_GENRE_FILTER') {
        const newState = {
            ...state,
            genreFilter: actionPayload
        }

        updateFilterLocalStorage(newState)

        return newState
    }

    if (actionType === 'UPDATE_PAGES_FILTER') {
        const newState = {
            ...state,
            pagesFilter: actionPayload
        }

        updateFilterLocalStorage(newState)

        return newState
    }

    if (actionType === 'UPDATE_YEAR_FILTER') {
        const newState = {
            ...state,
            yearFilter: actionPayload
        }

        updateFilterLocalStorage(newState)

        return newState
    }

    if (actionType === 'UPDATE_AUTHOR_FILTER') {
        const newState = {
            ...state,
            authorFilter: actionPayload
        }
        
        updateFilterLocalStorage(newState)

        return newState
    }

    return state
}

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const updateGenreFilter = (genre) => dispatch({
        type: 'UPDATE_GENRE_FILTER',
        payload: genre
    })

    const updatePagesFilter = (pages) => dispatch({
        type: 'UPDATE_PAGES_FILTER',
        payload: pages
    })
    const updateYearFilter = year => dispatch({
        type: 'UPDATE_YEAR_FILTER',
        payload: year
    })
    const updateAuthorFilter = author => dispatch({
        type: 'UPDATE_AUTHOR_FILTER',
        payload: author
    })

    return (
        <FiltersContext.Provider value={{
            genre: state.genreFilter,
            author: state.authorFilter,
            minPages: state.pagesFilter,
            minYear: state.yearFilter,
            updateGenreFilter,
            updatePagesFilter,
            updateYearFilter,
            updateAuthorFilter
        }}>
            {children}
        </FiltersContext.Provider>
    )
}