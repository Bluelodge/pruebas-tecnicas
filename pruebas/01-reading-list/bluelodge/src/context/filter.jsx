import { createContext, useReducer } from "react"
import { PropTypes } from 'prop-types'

import { filterReducer } from "../reducers/filter"
import { filterInitialState } from "../logic/localStorage"

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState)

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

FiltersProvider.propTypes = {
  children: PropTypes.array
}
