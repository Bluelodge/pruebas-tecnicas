import { useContext } from 'react'
import { ReadingContext } from '../context/library.jsx'
import { useBooks } from './useBooks'
import { useFilters } from './useFilters'
import { FetchAuthors, FetchGenres } from "../logic/books"

export function useReading() {
    const context = useContext(ReadingContext)

    // Verify component uses context
    if (context === undefined){
        throw new Error('useReading must be used whithin Reading context')
    }
    
    const {library} = useBooks({context})
    const genres = FetchGenres({library})
    const authors = FetchAuthors({library})

    const { filterComercialLibrary } = useFilters()
    const { books, totalFiltered } = filterComercialLibrary(context.commercialLibrary)

    return {...context, books, totalFiltered, genres, authors}
}
