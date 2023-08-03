import { useContext } from "react"
import { FiltersContext } from "../context/filter"

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
                    context.genre === 'all' ||
                    book.genre === context.genre
                )
                &&
                (
                    context.author === 'all' ||
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
