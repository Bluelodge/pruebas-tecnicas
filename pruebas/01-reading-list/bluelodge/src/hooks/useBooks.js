import { useEffect } from 'react'
import { library } from '../logic/books'

export function useBooks({ context }) {
    const mappedBooks = library

    useEffect(() => {
        context.setInitialLibrary(mappedBooks)
    }, [])

    return { library }
}
