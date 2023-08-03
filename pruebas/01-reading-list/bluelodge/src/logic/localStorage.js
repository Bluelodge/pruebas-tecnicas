import { FILTER_DEFAULT_VALUES, LIBRARY_DEFAULT_VALUES } from "../constants/constants"

export const filterInitialState = {
    genreFilter: JSON.parse(window.localStorage.getItem('genre_filter')) || FILTER_DEFAULT_VALUES.GENRE_VALUE,
    authorFilter: JSON.parse(window.localStorage.getItem('author_filter')) || FILTER_DEFAULT_VALUES.AUTHOR_VALUE,
    pagesFilter: JSON.parse(window.localStorage.getItem('pages_filter')) || FILTER_DEFAULT_VALUES.PAGES_VALUE,
    yearFilter: JSON.parse(window.localStorage.getItem('year_filter')) || FILTER_DEFAULT_VALUES.YEAR_VALUE
}

export const updateFilterLocalStorage = state => {
    window.localStorage.setItem('genre_filter', JSON.stringify(state.genreFilter))
    window.localStorage.setItem('pages_filter', JSON.stringify(state.pagesFilter))
    window.localStorage.setItem('year_filter', JSON.stringify(state.yearFilter))
    window.localStorage.setItem('author_filter', JSON.stringify(state.authorFilter))
}

export const libraryInitialState = {
    readingList: JSON.parse(window.localStorage.getItem('reading_list')) || LIBRARY_DEFAULT_VALUES.READING_LIST_VALUE,
    totalReading: JSON.parse(window.localStorage.getItem('total_reading')) || LIBRARY_DEFAULT_VALUES.TOTAL_READING_VALUE,
    availableList: JSON.parse(window.localStorage.getItem('available_list')) || LIBRARY_DEFAULT_VALUES.AVAILABLE_LIST_VALUE,
    totalAvailable: JSON.parse(window.localStorage.getItem('total_available')) || LIBRARY_DEFAULT_VALUES.TOTAL_AVAILABLE_VALUE
}

export const updateLibraryLocalStorage = state => {
    window.localStorage.setItem('reading_list', JSON.stringify(state.readingList))
    window.localStorage.setItem('total_reading', JSON.stringify(state.totalReading))
    window.localStorage.setItem('available_list', JSON.stringify(state.availableList))
    window.localStorage.setItem('total_available', JSON.stringify(state.totalAvailable))
}
