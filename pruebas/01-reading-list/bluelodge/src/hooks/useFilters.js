import { useContext } from "react"
import { FiltersContext } from "../context/filter"
import { FILTER_DEFAULT_VALUES } from "../constants/constants"

export function useFilters () {
    const context = useContext(FiltersContext)

    // Verify components use context
    if (context === undefined){
        throw new Error('useReading must be used whithin Reading context')
    }

    const filterComercialLibrary = (bookList) => {

        const books = bookList.filter(book => {
            return (
                book.pages >= context.minPages
                &&
                parseInt(book.year)>= parseInt(context.minYear)
                &&
                (
                    context.genre === FILTER_DEFAULT_VALUES.GENRE_VALUE ||
                    book.genre === context.genre
                )
                &&
                (
                    context.author === FILTER_DEFAULT_VALUES.AUTHOR_VALUE ||
                    book.author === context.author
                )
            )
        })

        const totalFiltered = books.length

        books.sort((a, b) => (a.title.localeCompare(b.title)))

        return { books, totalFiltered }
    }

    return { ...context, filterComercialLibrary }
}
