import { FiltersProvider } from '../context/filter.jsx'

import { Books } from './Books.jsx'
import { Filters } from './Filter.jsx'
import { ReadingBooks } from './ReadingList.jsx'

import '../css/App.css'

export function Library() {
  return (
    <FiltersProvider>
      <ReadingBooks />
      <Filters />
      <Books />
    </FiltersProvider>
  )
}